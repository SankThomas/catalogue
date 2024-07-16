"use client";

import Container from "@/components/container";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "../_components/navbar";
import { Button } from "@/components/ui/button";

export default function NewEvent() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");

  const { toast } = useToast();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!eventName) {
        toast({
          title: "Event name is required",
          description: "Fill in the input",
        });
      } else if (!eventDate) {
        toast({
          title: "Event date is required",
          description: "Fill in the input",
        });
      } else if (!eventDescription) {
        toast({
          title: "Event description is required",
          description: "Fill in the input",
        });
      } else if (!eventLocation) {
        toast({
          title: "Event location is required",
          description: "Fill in the input",
        });
      } else if (!eventOrganizer) {
        toast({
          title: "Who is the organizer of the event?",
          description: "Fill in the input",
        });
      } else {
        const newEvent = {
          id: new Date().getTime().toString(),
          name: eventName,
          date: eventDate,
          description: eventDescription,
          location: eventLocation,
          organizer: eventOrganizer,
        };

        const events = window?.localStorage.getItem("events")
          ? JSON.parse(localStorage.getItem("events")) || []
          : null;
        events.push(newEvent);
        localStorage.setItem("events", JSON.stringify(events));

        setEventName("");
        setEventDate("");
        setEventDescription("");
        setEventLocation("");
        setEventOrganizer("");

        toast({
          title: "New event added",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "There seems to be an error in one of the components",
      });
    }
  }

  return (
    <>
      <Container>
        <Navbar />

        <div className="mx-auto max-w-2xl py-20">
          <h1 className="mb-16 text-4xl lg:text-5xl">Create new event</h1>

          <div className="pb-20">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 md:gap-4">
                <div>
                  <label
                    htmlFor="eventName"
                    className="mb-2 block text-xs font-semibold uppercase"
                  >
                    Event Name *
                  </label>
                  <input
                    type="text"
                    name="eventName"
                    id="eventName"
                    required
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="What is the name of the event?"
                    className="w-full rounded-lg border border-neutral-900 bg-transparent px-6 py-3 text-sm text-neutral-400 placeholder-neutral-600 outline-none transition focus:ring-2 focus:ring-neutral-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eventDate"
                    className="mb-2 block text-xs font-semibold uppercase"
                  >
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    id="eventDate"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    placeholder="When will the event take place?"
                    className="w-full rounded-lg border border-neutral-900 bg-transparent px-6 py-3 text-sm text-neutral-400 placeholder-neutral-700 outline-none transition focus:ring-2 focus:ring-neutral-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="eventDescription"
                  className="mb-2 block text-xs font-semibold uppercase"
                >
                  Event Description *
                </label>
                <textarea
                  name="eventDescription"
                  id="eventDescription"
                  cols="30"
                  rows="6"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  required
                  placeholder="Give a short description about the event"
                  className="w-full rounded-lg border border-neutral-900 bg-transparent px-6 py-3 text-sm text-neutral-400 placeholder-neutral-700 outline-none transition focus:ring-2 focus:ring-neutral-600"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 md:gap-4">
                <div>
                  <label
                    htmlFor="eventLocation"
                    className="mb-2 block text-xs font-semibold uppercase"
                  >
                    Event Location *
                  </label>
                  <input
                    type="text"
                    name="eventLocation"
                    id="eventLocation"
                    required
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="Where will the event take place?"
                    className="w-full rounded-lg border border-neutral-900 bg-transparent px-6 py-3 text-sm text-neutral-400 placeholder-neutral-700 outline-none transition focus:ring-2 focus:ring-neutral-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eventOrganizer"
                    className="mb-2 block text-xs font-semibold uppercase"
                  >
                    Event Organizer *
                  </label>
                  <input
                    type="text"
                    name="eventOrganizer"
                    id="eventOrganizer"
                    required
                    value={eventOrganizer}
                    onChange={(e) => setEventOrganizer(e.target.value)}
                    placeholder="Who is the primary organizer of the event?"
                    className="w-full rounded-lg border border-neutral-900 bg-transparent px-6 py-3 text-sm text-neutral-400 placeholder-neutral-700 outline-none transition focus:ring-2 focus:ring-neutral-600"
                  />
                </div>
              </div>

              <Button type="submit" onClick={handleSubmit}>
                Create new event
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}
