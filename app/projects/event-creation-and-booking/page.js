"use client";

import Container from "@/components/container";
import React from "react";
import Navbar from "./_components/navbar";
import dynamic from "next/dynamic";

const EventList = dynamic(
  () => {
    return import("./_components/eventlist");
  },
  { ssr: false },
);

export default function EventCreatingAndBooking() {
  return (
    <Container>
      <Navbar />
      <EventList />
    </Container>
  );
}
