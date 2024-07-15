import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const challenges = [
  {
    title: "Recipe page",
    url: "/projects/frontend-mentor-projects/recipe-page",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam vel esse ad, aspernatur veniam sed velit eveniet magni voluptate consectetur.",
    category: "Simple",
  },
];

export default function FrontendMentor() {
  return (
    <Container>
      <section className="space-y-12">
        <article className="space-y-4 text-center">
          <h1 className="text-4xl font-bold lg:text-5xl">
            Frontend Mentor Projects
          </h1>
          <p>
            This page contains all the frontend mentor projects I have attempted
            and completed
          </p>
        </article>

        <article className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <Link href={challenge.url} key={index}>
              <Card>
                <CardHeader>
                  <CardTitle>{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{challenge.description}</CardDescription>
                  <CardDescription className="mt-2 inline-flex rounded-full bg-neutral-900 px-4 py-2 text-xs transition hover:bg-neutral-800">
                    {challenge.category}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </article>
      </section>
    </Container>
  );
}
