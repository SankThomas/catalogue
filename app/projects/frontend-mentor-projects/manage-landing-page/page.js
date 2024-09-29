import React from "react";
import Header from "./_components/header";
import Showcase from "./_components/showcase";
import Container from "@/components/fmcontainer";

export default function ManageLandingPage() {
  return (
    <section className="h-screen bg-white">
      <Container />
      <div className="container mx-auto">
        <Header />
        <Showcase />
      </div>
    </section>
  );
}
