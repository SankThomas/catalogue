"use client";

import Container from "@/components/container";
import Search from "@/components/search";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function page() {
  const [pokemon, setPokemon] = useState();
  const [filteredCards, setFilteredCards] = useState([]);
  const [text, setText] = useState("");

  async function getPokemon() {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
      const data = await res.json();
      setPokemon(data.results);
    } catch {
      console.error("There was a problem fetching data");
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);

  function search(title) {
    setText(title);

    if (text) {
      const filteredCards = pokemon.filter((poke) =>
        Object.values(poke)
          .join("")
          .toLocaleLowerCase()
          .includes(title.toLowerCase()),
      );
      setFilteredCards(filteredCards);
    } else {
      setFilteredCards(pokemon);
    }
  }

  return (
    <Container>
      <article className="mx-auto mb-8 max-w-lg space-y-4 text-center">
        <h1>Pokedex</h1>
        <p>
          Click on a card to view more information about the Pokemon. This app
          only shows the first 1000 pokemon in the Pokedex.
        </p>

        <Search search={search} />
      </article>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {pokemon ? (
          text.length > 1 ? (
            filteredCards.map((result) => (
              <Link key={result.name} href={`/projects/pokedex/${result.name}`}>
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">{result.name}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))
          ) : (
            pokemon.map((result) => (
              <Link key={result.name} href={`/projects/pokedex/${result.name}`}>
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">{result.name}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))
          )
        ) : (
          <p>Loading pokemon data</p>
        )}
      </div>
    </Container>
  );
}
