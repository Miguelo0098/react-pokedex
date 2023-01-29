import { Pokemon, PokemonClient } from "pokenode-ts";

const pokemonService = new PokemonClient();

export const getPokemonList = async (offset: number, limit: number) => {
  const data = await pokemonService.listPokemons(offset, limit);
  const pokemonPromises = await Promise.allSettled(
    data.results.map((pokemon) => pokemonService.getPokemonByName(pokemon.name))
  );

  const pokemonData: Pokemon[] = [];
  pokemonPromises.forEach((result) => {
    if (result.status === "fulfilled") {
      pokemonData.push(result.value);
    } else {
      throw new Error(`Error fetching data for ${result.reason}`);
    }
  });

  return { pokemons: pokemonData, hasMore: !!data.next };
};

export const getPokemonDataByName = async (name: string) => {
  const pokemon = await pokemonService.getPokemonByName(name);
  return pokemon;
};
