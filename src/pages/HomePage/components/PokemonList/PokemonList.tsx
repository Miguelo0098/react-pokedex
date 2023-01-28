import React, { useState, useEffect } from "react";

import { List, ListItem, ListItemText } from "@mui/material";

interface Pokemon {
  name: string;
  id: number;
}

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPokemons((prevPokemon) => [...prevPokemon, ...data.results]);
        setLoading(false);
      });
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <List>
      {pokemons.map((pokemon) => (
        <ListItem key={pokemon.id}>
          <ListItemText primary={pokemon.name} />
        </ListItem>
      ))}
      <ListItem>{loading && <ListItemText primary="loading..." />}</ListItem>
    </List>
  );
};
