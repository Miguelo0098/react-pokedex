import React, { useEffect, useState } from "react";
import { Pokemon } from "pokenode-ts";

import { getPokemonDataByName } from "../../../../services/pokemonService";
import { PokemonInfo } from "../../../../parts/PokemonInfo/PokemonInfo";

export interface IPokemonDetailsProps {
  pokemonName: string;
}

export function PokemonDetails({ pokemonName }: IPokemonDetailsProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [error, setError] = useState<Error | null>(null);
  console.log(pokemon, error);

  useEffect(() => {
    getPokemonDataByName(pokemonName)
      .then((pokemon) => {
        setPokemon(pokemon);
      })
      .catch((error: Error) => {
        setError(error);
      });
  }, [pokemonName]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return pokemon ? (
    <PokemonInfo
      name={pokemon.name}
      image={pokemon.sprites.front_default}
      types={pokemon.types.map((type) => type.type.name).join("-")}
    />
  ) : (
    <div>loading...</div>
  );
}
