import React, { useState, useEffect } from "react";
import { Pokemon } from "pokenode-ts";
import { Box, ListItemText } from "@mui/material";

import { useInfiniteScroll } from "../../../../hooks/useInfiniteScroll";
import { getPokemonList } from "../../../../services/pokemonService";
import { PokemonGrid } from "../../../../components/PokemonGrid/PokemonGrid";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (hasMore) {
      setLoading(true);
      getPokemonList((page - 1) * 20, 20).then((data) => {
        setPokemons((prevPokemon) => [...prevPokemon, ...data.pokemons]);
        setLoading(false);
        setHasMore(data.hasMore);
      });
    }
  }, [page, hasMore]);

  useInfiniteScroll({
    callback: () => {
      setPage((prevPage) => prevPage + 1);
    },
  });

  return (
    <Box>
      <PokemonGrid pokemons={pokemons} />
      {loading && <ListItemText primary="loading..." />}
    </Box>
  );
};
