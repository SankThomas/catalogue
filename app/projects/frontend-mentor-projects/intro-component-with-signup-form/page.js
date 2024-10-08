import Container from "@/components/fmcontainer";
import { Button } from "@/components/ui/button";
import React from "react";

export default function IntroComponentWithSignUpForm() {
  return (
    <div
      className="h-full bg-[#FE7B7A] px-6 py-32 lg:h-screen"
      style={{
        background: `url(/images/intro-component-with-signup-form/bg-intro-desktop.png)`,
      }}
    >
      <Container />
      <div className="flex flex-col items-center justify-center gap-12 text-center md:mx-auto md:grid md:max-w-6xl md:grid-cols-2 md:text-left">
        <article className="space-y-6">
          <h1 className="leading-tight">Learning to code by watching others</h1>
          <p className="leading-7 text-neutral-300">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
          <p>I've changed the background color from the original project</p>
        </article>

        <article>
          <p className="mb-8 rounded-lg bg-indigo-700 px-4 py-3 text-white shadow lg:text-lg">
            <strong>Try it free 7 days</strong> then $20/mo. thereafter
          </p>
          <form className="grid gap-4 rounded-lg bg-white p-8 shadow">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              required
              className="w-full rounded-lg border border-neutral-400 px-4 py-3 font-bold text-neutral-800 placeholder-neutral-600 transition focus:border-rose-400 focus:ring-4 focus:ring-rose-500"
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              required
              className="w-full rounded-lg border border-neutral-400 px-4 py-3 font-bold text-neutral-800 placeholder-neutral-600 transition focus:border-rose-400 focus:ring-4 focus:ring-rose-500"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
              className="w-full rounded-lg border border-neutral-400 px-4 py-3 font-bold text-neutral-800 placeholder-neutral-600 transition focus:border-rose-400 focus:ring-4 focus:ring-rose-500"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="w-full rounded-lg border border-neutral-400 px-4 py-3 font-bold text-neutral-800 placeholder-neutral-600 transition focus:border-rose-400 focus:ring-4 focus:ring-rose-500"
            />
            <Button
              type="submit"
              className="bg-[#38CC8C] py-3 text-lg font-bold uppercase hover:bg-[#207953]"
              size="lg"
            >
              Claim your free trial
            </Button>
            <small className="inline-block text-center">
              By clicking the button, you are agreeing to our{" "}
              <span className="font-bold text-rose-400">
                Terms and Services
              </span>
            </small>
          </form>
        </article>
      </div>
    </div>
  );
}
