import Container from "@/components/fmcontainer";
import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Overview from "./components/overview";

export default function SocialMediaDashboard() {
  return (
    <section>
      <Container />

      <div className="px--6 mx-auto max-w-7xl space-y-12 py-32">
        <Header />
        <Hero />
        <Overview />
      </div>
    </section>
  );
}
