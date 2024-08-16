import React from "react";

export default function PokemonCard({ pokemon }) {
  console.log(pokemon ? Object.keys(pokemon).map((poke) => poke) : "undefined");

  return (
    <>
      <h1>Pokemon</h1>
    </>
  );
}
