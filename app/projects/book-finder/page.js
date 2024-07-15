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
import { format } from "date-fns/format";

async function getBookCategories() {
  const url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.NEXT_BOOKS_APP_API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch book categories");
  }

  return res.json();
}

export default async function BookFinderAndSearch() {
  const categories = await getBookCategories();

  return (
    <>
      <Container>
        <article className="mx-auto mb-8 max-w-2xl text-center">
          <h1 className="mb-8 text-4xl lg:text-5xl">Book Finder</h1>
          <CardDescription>
            This app uses the{" "}
            <a
              href="https://developer.nytimes.com/docs/books-product/1/overview"
              target="_blank"
              rel="noreferrer"
              className="text-white underline"
            >
              New York Times Books API
            </a>
          </CardDescription>
        </article>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.results.map((category) => (
            <Link
              href={`/projects/book-finder/books/${category.list_name_encoded}`}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.display_name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardDescription>
                    <strong>First published: </strong>
                    {format(
                      new Date(category.oldest_published_date),
                      "do MMMM yyyy",
                    )}
                  </CardDescription>
                  <CardDescription>
                    <strong>Last published: </strong>
                    {format(
                      new Date(category.newest_published_date),
                      "do MMMM yyyy",
                    )}
                  </CardDescription>
                  <CardDescription>
                    <strong>Updated</strong>: {category.updated}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
