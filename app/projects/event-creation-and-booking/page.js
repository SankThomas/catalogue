import Container from "@/components/container";
import React from "react";
import Navbar from "./_components/navbar";
import EventList from "./_components/eventlist";

export default function EventCreatingAndBooking() {
  return (
    <Container>
      <Navbar />
      <EventList />
    </Container>
  );
}
