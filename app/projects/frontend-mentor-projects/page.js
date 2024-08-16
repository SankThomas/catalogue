"use client";

import Container from "@/components/container";
import Search from "@/components/search";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { challenges } from "@/lib/challenges";
import Link from "next/link";
import React, { useState } from "react";

export default function FrontendMentor() {
  const [cards] = useState(challenges);
  const [filteredCards, setFilteredCards] = useState([]);
  const [text, setText] = useState("");

  function search(title) {
    setText(title);

    if (text) {
      const filteredCards = cards.filter((project) =>
        Object.values(project)
          .join("")
          .toLocaleLowerCase()
          .includes(title.toLowerCase()),
      );
      setFilteredCards(filteredCards);
    } else {
      setFilteredCards(cards);
    }
  }

  return (
    <Container>
      <section className="space-y-12">
        <article className="mx-auto max-w-2xl space-y-4 text-center">
          <h1 className="text-4xl font-bold lg:text-5xl">
            Frontend Mentor Projects
          </h1>
          <p>
            This page contains all the frontend mentor projects I have attempted
            and completed. Use the search filter below to get specific projects
          </p>

          <Search search={search} />
        </article>

        <article className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {text.length > 1
            ? filteredCards.map((challenge, index) => (
                <Link href={challenge.url} key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="leading-6">
                        {challenge.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{challenge.description}</CardDescription>
                      <div className="flex flex-wrap items-center justify-start gap-2">
                        {challenge.category.map((cat, index) => (
                          <CardDescription
                            key={index}
                            className="mt-2 inline-flex rounded-full bg-neutral-900 px-4 py-2 text-xs transition hover:bg-neutral-800"
                          >
                            {cat}
                          </CardDescription>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : challenges.map((challenge, index) => (
                <Link href={challenge.url} key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="leading-6">
                        {challenge.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{challenge.description}</CardDescription>
                      <div className="flex flex-wrap items-center justify-start gap-2">
                        {challenge.category.map((cat, index) => (
                          <CardDescription
                            key={index}
                            className="mt-2 inline-flex rounded-full bg-neutral-900 px-4 py-2 text-xs transition hover:bg-neutral-800"
                          >
                            {cat}
                          </CardDescription>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
        </article>
      </section>
    </Container>
  );
}
