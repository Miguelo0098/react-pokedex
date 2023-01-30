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

  return (
    <PokemonInfo
      name={pokemon?.name}
      image={pokemon?.sprites.front_default}
      types={pokemon?.types.map((type) => type.type.name).join("-")}
      baseExperience={pokemon?.base_experience}
      height={pokemon?.height}
      order={pokemon?.order}
      weight={pokemon?.weight}
      abilities={pokemon?.abilities
        .map((ability) => ability.ability.name)
        .join(", ")}
    />
  );
}
