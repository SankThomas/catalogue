"use client";

import React from "react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// NOTE for future references:
// Dynamic imports fix `window is not defined` when deploying to Vercel or Netlify
const Map = dynamic(
  () => {
    return import("./_components/map");
  },
  { ssr: false },
);

export default function NasaEonet() {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [eventType, setEventType] = useState("volcanoes");

  async function getCategories() {
    const res = await fetch(`https://eonet.gsfc.nasa.gov/api/v3/categories`);
    const data = await res.json();
    setCategories(data.categories);
  }

  useEffect(() => {
    getCategories();
  }, []);

  async function getEvents() {
    const res = await fetch(
      `https://eonet.gsfc.nasa.gov/api/v3/categories/${eventType}`,
    );

    if (!res.ok) {
      return (
        <div className="absolute left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-neutral-400 p-8 shadow">
          <h2 className="mb-4 text-xl font-bold text-neutral-900">
            Failed to get the data
          </h2>
          <p className="leading-6 text-neutral-600">
            Check your internet connection and try again
          </p>
        </div>
      );
    }

    const data = await res.json();
    setEvents(data.events);
  }

  useEffect(() => {
    getEvents();
  }, [eventType]);

  function handleSubmit(e) {
    e.preventDefault();

    getEvents();
  }

  return (
    <div>
      <div className="absolute z-[500] flex w-full items-center justify-around bg-neutral-900 bg-opacity-80 p-4 text-center text-white">
        <article>
          <h2 className="text-2xl">Natural Event Tracker</h2>
          <p>This app uses NASA's EONET API</p>
        </article>
      </div>

      <div className="absolute right-6 top-6 z-[1000]">
        <form onSubmit={handleSubmit}>
          <select
            name="eventType"
            id="eventType"
            className="rounded-lg border-none bg-neutral-800 p-2 text-sm font-semibold text-neutral-300 shadow outline-none transition focus:ring-2 focus:ring-neutral-600"
            onChange={(e) => setEventType(e.target.value)}
          >
            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="text-sm font-semibold text-neutral-300"
              >
                {category.title}
              </option>
            ))}
          </select>
        </form>
      </div>

      <Map events={events} />
    </div>
  );
}
