import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default async function Book({ params }) {
  async function getBooks() {
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/${params.books}.json?api-key=${process.env.NEXT_BOOKS_APP_API_KEY}`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return res.json();
  }

  const books = await getBooks();

  return (
    <Container>
      <h1 className="mb-4 mt-16 text-4xl lg:text-5xl">
        {books.results.books && books.results.display_name}
      </h1>
      <CardDescription className="mb-8 lg:text-lg">
        {books.results.books && books.results.books.length} books
      </CardDescription>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {!books.results.books ? (
          <CardTitle>No books to show in this category</CardTitle>
        ) : (
          books.results.books.map((book) => (
            <Card key={book.description}>
              <CardHeader>
                {book.book_image ? (
                  <Image
                    src={book.book_image}
                    width={800}
                    height={600}
                    alt={book.title}
                    className="rounded-lg"
                  />
                ) : (
                  <CardTitle className="flex h-[600px] items-center justify-center text-center">
                    No cover image
                  </CardTitle>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle className="text-lg">By {book.author}</CardTitle>
                {book.description && (
                  <CardDescription>{book.description}</CardDescription>
                )}

                <div>
                  <h3 className="mb-6">Buy now</h3>

                  <ul className="flex flex-wrap items-center justify-start gap-3">
                    {book.buy_links.map((link, index) => (
                      <li key={index}>
                        <Button asChild>
                          <a href={link.url}>{link.name}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </Container>
  );
}
