import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Car } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function Country({ params }) {
  async function getCountry() {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${params.country}?fullText=true`,
    );

    if (!res.ok) {
      throw new Error("Custom error: Failed to fetch");
    }

    return res.json();
  }

  const country = await getCountry();

  return (
    <Container>
      {country.map((c) => (
        <div
          key={c.name.official}
          className="grid gap-4 lg:grid-cols-2 lg:gap-8"
        >
          <article>
            <Image
              src={c.flags.png}
              width={800}
              height={600}
              alt={c.name.common}
              className="w-full rounded-lg"
            />
          </article>

          <Card>
            <CardHeader></CardHeader>

            <CardContent className="space-y-4">
              <h1 className="text-4xl font-bold">{c.name.common}</h1>
              <CardDescription>
                <strong>Official name:</strong> {c.name.official}
              </CardDescription>

              <CardDescription>
                <strong>Capital:</strong> {c.capital}
              </CardDescription>

              <CardDescription>
                <strong>Region:</strong> {c.region}
              </CardDescription>
              <CardDescription>
                <strong>Subregion:</strong> {c.subregion}
              </CardDescription>

              <ul className="flex flex-wrap items-center justify-start gap-2">
                <CardDescription>
                  <strong>Continent:</strong>
                </CardDescription>
                {c.continents.map((cont, index) => (
                  <li key={index}>
                    <CardDescription>{cont}</CardDescription>
                  </li>
                ))}
              </ul>

              {c.borders ? (
                <>
                  <CardDescription>
                    <strong>Bordered by:</strong>
                  </CardDescription>
                  <ul className="flex flex-wrap items-center justify-start gap-2">
                    {c.borders.map((border, index) => (
                      <li key={index}>
                        <Button>{border}</Button>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <CardDescription>
                  <strong>Has no border countries</strong>
                </CardDescription>
              )}

              <CardDescription>
                <strong>Population:</strong> {c.population.toLocaleString()}
              </CardDescription>

              <CardDescription className="flex items-center gap-2 capitalize">
                <strong>
                  <Car />
                </strong>
                {c.car.side} hand drive
              </CardDescription>

              <>
                <CardDescription>
                  <strong>Currency: </strong>
                </CardDescription>
                <div className="flex flex-wrap items-center justify-start gap-2">
                  {Object.values(c.currencies).map((currency, index) => (
                    <Button key={index}>
                      {currency.name}, {currency.symbol}
                    </Button>
                  ))}
                </div>
              </>
            </CardContent>
          </Card>
        </div>
      ))}
    </Container>
  );
}
