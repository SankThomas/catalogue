"use client";

import Search from "@/components/search";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React, { useState } from "react";
import { projects } from "@/lib/projects";

export default function Home() {
  const [cards] = useState(projects);
  const [filteredCards, setFilteredCards] = useState([]);
  const [text, setText] = useState("");

  function search(title) {
    setText(title);

    if (text) {
      const filteredCards = cards.filter((project) =>
        Object.values(project)
          .join("")
          .toLowerCase()
          .includes(title.toLowerCase()),
      );
      setFilteredCards(filteredCards);
    } else {
      setFilteredCards(cards);
    }
  }

  return (
    <>
      <section className="container mx-auto space-y-12 px-6 py-20">
        <article className="mx-auto max-w-2xl space-y-4 text-center">
          <h1 className="text-4xl font-bold lg:text-5xl">
            Catalogue of projects
          </h1>
          <p>
            Welcome to my catalogue of projects. Here, you can find all the
            projects on my YouTube channel as well as on my GitHub...completely
            free. This also features my own personal projects that are not on my
            YouTube channel.
          </p>

          <Search search={search} />
        </article>

        <article className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {text.length > 1
            ? // Search filtered cards
              filteredCards.map((project) => (
                <Link href={project.url} key={project.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{project.description}</CardDescription>
                      <CardDescription className="mt-2 inline-flex rounded-full bg-neutral-900 px-4 py-2 text-xs transition hover:bg-neutral-800">
                        {project.category}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : // The actual projects that populate the UI
              cards.map((project) => (
                <Link href={project.url} key={project.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{project.description}</CardDescription>
                      <CardDescription className="mt-2 inline-flex rounded-full bg-neutral-900 px-4 py-2 text-xs transition hover:bg-neutral-800">
                        {project.category}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
        </article>
      </section>
    </>
  );
}
