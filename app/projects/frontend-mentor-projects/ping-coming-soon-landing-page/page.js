import Container from "@/components/fmcontainer";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Ping() {
  return (
    <div className="h-full bg-white">
      <Container />

      <div className="mx-auto max-w-2xl px-6 py-32 lg:flex lg:items-center lg:justify-center">
        <article className="space-y-8">
          <Image
            src="/images/ping-coming-soon-landing-page/logo.svg"
            width={100}
            height={60}
            alt="Ping landing page"
            className="mx-auto block"
          />
          <h1 className="text-center text-neutral-400">
            We are launching <span className="text-slate-900">soon!</span>
          </h1>
          <p className="text-center text-neutral-800 lg:text-xl">
            Subscribe and get notified
          </p>

          <form className="flex flex-col items-center gap-4 lg:flex-row">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              required
              className="w-full rounded-full border border-neutral-400 px-4 py-3 text-neutral-800 outline-none transition hover:border-blue-300 hover:outline-4 hover:outline-blue-300 focus:ring-4 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 px-12 py-3 font-bold text-white lg:w-[300px]"
            >
              Notify Me
            </button>
          </form>

          <Image
            src="/images/ping-coming-soon-landing-page/illustration-dashboard.png"
            width={800}
            height={600}
            alt="PING landing page illustration"
            className="mx-auto block"
          />

          <ul className="flex flex-wrap items-center justify-center gap-4">
            <li>
              <Button variant="outline" className="border-blue-200">
                <FacebookIcon className="text-blue-600" />
              </Button>
            </li>
            <li>
              <Button variant="outline" className="border-blue-200">
                <TwitterLogoIcon className="text-blue-600" />
              </Button>
            </li>
            <li>
              <Button variant="outline" className="border-blue-200">
                <InstagramLogoIcon className="text-blue-600" />
              </Button>
            </li>
          </ul>

          <p className="text-center text-sm text-neutral-400">
            &copy; Ping. All Rights Reserved.
          </p>
        </article>
      </div>
    </div>
  );
}
