import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Chart from "../_components/chart";

export default async function page({ params }) {
  async function getPokemonDetails() {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`,
    );

    return res.json();
  }

  const details = await getPokemonDetails();

  return (
    <Container>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <article>
          <h1>{details.name}</h1>

          <Image
            src={details.sprites.other.home.front_default}
            width={400}
            height={400}
            alt={details.name}
          />

          <ul className="mt-8 flex flex-wrap items-center justify-start gap-4">
            {details.types.map((type, index) => (
              <li key={index}>
                <Button>{type.type.name}</Button>
              </li>
            ))}
          </ul>
        </article>

        <article>
          <Chart />
        </article>
      </div>
    </Container>
  );
}
