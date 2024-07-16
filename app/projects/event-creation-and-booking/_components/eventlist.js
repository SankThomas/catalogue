"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { format } from "date-fns";

export default function EventList() {
  const [eventList, setEventList] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events") || "[]");
    setEventList(events);
  }, []);

  useEffect(() => {
    const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];
  }, []);

  const handleBookEvent = (event) => {
    // Check if the event is already booked
    if (
      bookedEvents.find((e) => e.name === event.name && e.date === event.date)
    ) {
      toast({
        title: "Event already booked",
        description: "Try booking another event",
      });
      return;
    }

    // If the event is not booked, then add it to booked events
    const updateBookedEvents = [...bookedEvents, event];
    localStorage.setItem("bookedEvents", JSON.stringify(updateBookedEvents));
    toast({
      title: "Event booked successfully",
    });
  };

  return (
    <>
      <div className="py-20">
        <h1 className="mb-8 text-4xl lg:text-5xl">All Current Events</h1>
        {eventList.length === 0 ? (
          <CardDescription className="lg:text-base">
            Navigate to the{" "}
            <Link
              href="/projects/event-creation-and-booking/new-event"
              className="text-white underline"
            >
              New Event Page
            </Link>{" "}
            to start creating events, and they will be displayed on this page.
          </CardDescription>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {eventList.map((event) => (
              <Card key={event.id}>
                <CardHeader></CardHeader>

                <CardContent className="space-y-4">
                  <CardTitle>{event.name}</CardTitle>
                  <CardDescription>
                    <strong>Event Date:</strong>{" "}
                    {format(new Date(event.date), "do MMMM yyyy")}
                  </CardDescription>
                  <CardDescription>{event.description}</CardDescription>
                  <CardDescription>
                    <strong>Event Location:</strong> {event.location}
                  </CardDescription>
                  <CardDescription>
                    <strong>Event Organizer:</strong> {event.organizer}
                  </CardDescription>
                  <Button onClick={() => handleBookEvent(event)}>
                    Book Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
