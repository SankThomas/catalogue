"use client";

import Container from "@/components/container";
import { CardDescription } from "@/components/ui/card";
import { format } from "date-fns";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../_components/navbar";

export default function BookedEvents() {
  const [bookedEvents, setBookedEvents] = useState([]);

  useEffect(() => {
    const events = window?.localStorage.getItem("bookedEvents")
      ? JSON.parse(localStorage.getItem("bookedEvents") || "[]")
      : null;
    setBookedEvents(events);
  }, []);

  return (
    <Container>
      <Navbar />

      <div className="py-20">
        <h1 className="mb-8 text-4xl lg:text-5xl">Booked Events</h1>
        {bookedEvents === null ? (
          <CardDescription>
            No booked events found. Navigate to the{" "}
            <Link
              href="/projects/event-creation-and-booking/"
              className="text-white underline"
            >
              homepage
            </Link>{" "}
            to book an event
          </CardDescription>
        ) : (
          <table width="100%" className="container w-full overflow-auto">
            <thead className="border-b border-neutral-800">
              <tr className="text-white">
                <td className="px-6 py-4 text-lg font-bold">Event name</td>
                <td className="py-4 text-lg font-bold">Event date</td>
                <td className="py-4 text-lg font-bold">Event location</td>
                <td className="py-4 text-lg font-bold">Event organizer</td>
              </tr>
            </thead>

            <tbody>
              {bookedEvents.map((event) => (
                <tr key={event.id} className="py-2 even:bg-neutral-900">
                  <td className="px-6 py-4">{event.name}</td>
                  <td className="py-4">
                    {format(new Date(event.date), "do MMMM yyyy")}
                  </td>
                  <td className="py-4">{event.location}</td>
                  <td className="py-4">{event.organizer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Container>
  );
}
