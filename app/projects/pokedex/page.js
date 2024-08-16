"use client";

import Container from "@/components/container";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PokemonCard from "./_components/pokemoncard";

export default function page() {
  const [pokemon, setPokemon] = useState();
  const [total] = useState(5);

  useEffect(() => {
    // Function to loop through the total number provided
    async function fetchPokemon() {
      for (let i = 1; i <= total; i++) {
        await getPokemon(i);
      }
    }

    async function getPokemon(id) {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const data = await res.json();
        setPokemon(data);
      } catch {
        throw new Error("Failed to fetch from the PokeAPI");
      }
    }

    fetchPokemon();
  }, []);

  return (
    <Container>
      <article className="mx-auto mb-8 max-w-lg space-y-4 text-center">
        <h1>Pokedex</h1>
        <p>Click on a card to view more information about the Pokemon</p>
      </article>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {/* {pokemon.map((result, index) => (
          <Link key={result.name} href={`/projects/pokedex/${index + 1}`}>
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">{result.name}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))} */}

        <PokemonCard pokemon={pokemon} />
      </div>
    </Container>
  );
}
