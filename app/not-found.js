import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <>
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:place-items-center">
          <article className="space-y-6">
            <h1 className="text-4xl">Sorry</h1>
            <CardDescription className="lg:text-lg">
              This project has not yet been built
            </CardDescription>

            <Button asChild>
              <Link href="/">Browse other projects</Link>
            </Button>
          </article>

          <article></article>
        </div>
      </Container>
    </>
  );
}
