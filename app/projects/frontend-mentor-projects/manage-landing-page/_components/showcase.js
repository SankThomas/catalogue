import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Showcase() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <article>
        <h1 className="leading-tight text-[#242D52]">
          Bring everyone together to build better products.
        </h1>
        <p className="mb-8 text-neutral-600">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>

        <Button className="bg-[#F35F3B] transition-all hover:bg-[#ca4f31]">
          Get Started
        </Button>
      </article>

      <article>
        <Image
          src="/images/manage-landing-page/illustration-intro.svg"
          width={800}
          height={600}
          alt="Intro"
        />
      </article>
    </div>
  );
}
