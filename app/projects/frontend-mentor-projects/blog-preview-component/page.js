import Container from "@/components/fmcontainer";
import Image from "next/image";
import React from "react";

export default function BlogComponent() {
  return (
    <div className="bg-yellow-500 px-8 py-20 lg:flex lg:h-screen lg:items-center lg:justify-center lg:py-0">
      <Container />

      <article className="mx-auto w-full max-w-lg space-y-4 rounded-lg bg-white p-6">
        <Image
          src="/images/illustration-article.svg"
          width={800}
          height={600}
          alt="HTML and CSS foundations article"
          className="rounded-2xl"
        />
        <p className="inline-block rounded-lg bg-yellow-500 px-4 py-2 text-sm font-bold text-neutral-900">
          Learning
        </p>

        <p className="text-sm font-semibold text-neutral-900">
          Published 13th Aug 2024
        </p>

        <h2 className="text-2xl text-neutral-900 hover:text-yellow-500">
          HTML and CSS foundations
        </h2>

        <p className="leading-6 text-neutral-600">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>

        <div className="flex flex-wrap items-center justify-start gap-4">
          <Image
            src="/images/image-avatar.webp"
            width={80}
            height={80}
            alt="Greg Hooper"
            className="rounded-full shadow"
          />
          <h3 className="text-lg font-bold text-neutral-900">Greg Hooper</h3>
        </div>
      </article>
    </div>
  );
}
