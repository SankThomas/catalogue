import React from "react";
import Header from "./_components/header";
import Showcase from "./_components/showcase";

export default function ManageLandingPage() {
  return (
    <section className="h-screen bg-white">
      <div className="container mx-auto">
        <Header />
        <Showcase />
      </div>
    </section>
  );
}
