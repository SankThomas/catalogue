"use client";

import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import Search from "@/components/search";
import Link from "next/link";
import Image from "next/image";

export default function DogApp() {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [text, setText] = useState("");

  async function getDogs() {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_DOG_APP_API_KEY,
    });

    const options = {
      method: "GET",
      headers,
      redirect: "follow",
    };

    const res = await fetch(
      `https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=asc&page=0&limit=20`,
      options,
    );
    const data = await res.json();
    setDogs(data);
  }

  useEffect(() => {
    getDogs();
  }, []);

  function search(title) {
    setText(title);

    if (text) {
      const filteredDogs = dogs.filter((dog) =>
        Object.values(dog).join("").toLowerCase().includes(title.toLowerCase()),
      );
      setFilteredDogs(filteredDogs);
    } else {
      setFilteredDogs(dogs);
    }
  }

  return (
    <>
      <Container>
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <h1>The Real Dog App</h1>
          <CardDescription>
            This app uses{" "}
            <a
              href="https://thedogapi.com"
              target="_blank"
              rel="noreferrer"
              className="text-white underline"
            >
              the Dog API
            </a>
            , and shows only 20 dog breeds by default.
          </CardDescription>

          <Search search={search} />
        </div>

        <div className="lg:grid-cols- grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {text.length > 1
            ? filteredDogs.map(({ breeds, url, width, height }) => {
                const id = breeds.map((breed) => breed.id);
                return (
                  <Link href={`/projects/dog-app/dog/${id}`}>
                    <Card>
                      <CardHeader>
                        <Image
                          src={url}
                          width={width}
                          height={height}
                          className="h-96 w-full rounded-lg object-cover"
                          alt={id}
                        />
                      </CardHeader>
                      <CardContent>
                        {breeds.map((breed) => (
                          <CardTitle key={breed.id}>{breed.name}</CardTitle>
                        ))}
                      </CardContent>
                    </Card>
                  </Link>
                );
              })
            : dogs.map(({ breeds, url, width, height }) => {
                const id = breeds.map((breed) => breed.id);

                return (
                  <Link href={`/projects/dog-app/dog/${id}`}>
                    <Card>
                      <CardHeader>
                        <Image
                          src={url}
                          width={width}
                          height={height}
                          className="h-96 w-full rounded-lg object-cover"
                          alt={id}
                        />
                      </CardHeader>
                      <CardContent>
                        {breeds.map((breed) => (
                          <CardTitle key={breed.id}>{breed.name}</CardTitle>
                        ))}
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
        </div>
      </Container>
    </>
  );
}
