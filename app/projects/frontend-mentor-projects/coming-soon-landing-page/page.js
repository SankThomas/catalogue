import Container from "@/components/fmcontainer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-[#FFF9F9] p-4 lg:p-0">
      <Container />
      <div className="grid lg:grid-cols-2">
        <article className="space-y-16 py-20 lg:mx-auto lg:max-w-xl lg:pt-40">
          <Image
            src="/images/coming-soon-landing-page/logo.svg"
            alt="Base Apparel"
            width={150}
            height={80}
          />

          <h1 className="font-light uppercase text-[#F09595] lg:text-6xl">
            We're{" "}
            <span className="mt-2 block font-bold text-neutral-800">
              Coming Soon
            </span>
          </h1>

          <p className="leading-6 text-[#F09595] lg:text-lg lg:leading-8">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <form className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required
              className="w-full rounded-full border border-[#F09595] bg-transparent px-6 py-3 text-[#F09595] placeholder-[#F09595] outline-none transition-all focus:border-[#c77b7b] focus:ring-4 focus:ring-[#e48d8d] lg:text-lg"
            />
            <label htmlFor="email" className="absolute right-0">
              <Button className="w-20 rounded-full bg-[#F09595] px-4 py-7 hover:bg-[#e48d8d]">
                <ChevronRight />
              </Button>
            </label>
          </form>
        </article>

        <article>
          <Image
            src="/images/coming-soon-landing-page/hero-desktop.jpg"
            alt="Base Apparel"
            width={1920}
            height={1080}
            className="aspect-auto h-auto max-w-full rounded-lg lg:rounded-none"
          />
        </article>
      </div>
    </div>
  );
}
