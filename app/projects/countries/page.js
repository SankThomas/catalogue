"use client";

import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SearchCountries from "./_components/searchcountries";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [text, setText] = useState("");

  function searchCountries(title) {
    setText(title);

    if (text) {
      const filteredCountries = countries.filter((project) =>
        Object.values(project)
          .join("")
          .toLowerCase()
          .includes(title.toLowerCase()),
      );
      setFilteredCountries(filteredCountries);
    } else {
      setFilteredCountries(countries);
    }
  }

  useEffect(() => {
    async function getCountries() {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    }

    getCountries();
  }, []);

  return (
    <Container>
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h1 className="mb-8 text-4xl lg:text-5xl">Countries App</h1>
        <p>
          This app uses the{" "}
          <a
            href="https://restcountries.com"
            target="_blank"
            rel="noreferrer"
            className="text-white underline"
          >
            RestCountries API
          </a>
        </p>

        <div className="mt-8">
          <SearchCountries searchCountries={searchCountries} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {text.length > 1
          ? // Search filter for countries
            filteredCountries.map((country) => (
              <Link
                href={`/projects/countries/${country.name.common}`}
                key={country.name.official}
              >
                <Card>
                  <CardHeader>
                    <Image
                      src={country.flags.png}
                      width={800}
                      height={600}
                      alt={country.name.common}
                      className="h-52 rounded-lg"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle>{country.name.common}</CardTitle>
                    <CardDescription>{country.name.official}</CardDescription>
                    <CardDescription>{country.region}</CardDescription>
                    <CardDescription>{country.subregion}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))
          : // Default data displayed on page load
            countries.map((country) => (
              <Link
                href={`/projects/countries/${country.name.common}`}
                key={country.name.official}
              >
                <Card>
                  <CardHeader>
                    <Image
                      src={country.flags.png}
                      width={800}
                      height={600}
                      alt={country.name.common}
                      className="h-52 rounded-lg"
                    />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle>{country.name.common}</CardTitle>
                    <CardDescription>
                      Official name: {country.name.official}
                    </CardDescription>
                    <CardDescription>Region: {country.region}</CardDescription>
                    <CardDescription>
                      Subregion: {country.subregion}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
      </div>
    </Container>
  );
}
