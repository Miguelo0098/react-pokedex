import React, { useState, useEffect } from "react";

import { List, ListItem, ListItemText } from "@mui/material";
import { useInfiniteScroll } from "../../../../hooks/useInfiniteScroll";
import { pokemonService } from "../../../../services/pokemonService";

interface Pokemon {
  name: string;
  url: string;
}

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    pokemonService.listPokemons((page - 1) * 20, 20).then((data) => {
      setPokemons((prevPokemon) => [...prevPokemon, ...data.results]);
      setLoading(false);
    });
  }, [page]);

  useInfiniteScroll({
    callback: () => {
      setPage((prevPage) => prevPage + 1);
    },
  });

  return (
    <List>
      {pokemons.map((pokemon, index) => (
        <ListItem key={`${index}-${pokemon.name}`}>
          <ListItemText primary={pokemon.name} />
        </ListItem>
      ))}
      <ListItem>{loading && <ListItemText primary="loading..." />}</ListItem>
    </List>
  );
};
