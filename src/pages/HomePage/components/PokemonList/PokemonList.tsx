import React, { useState, useEffect } from "react";

import { Box, ListItemText } from "@mui/material";
import { useInfiniteScroll } from "../../../../hooks/useInfiniteScroll";
import { pokemonService } from "../../../../services/pokemonService";
import { Pokemon } from "../../../../types/Pokemon";
import { PokemonGrid } from "../../../../components/PokemonGrid/PokemonGrid";

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
    <Box>
      <PokemonGrid pokemons={pokemons} />
      {loading && <ListItemText primary="loading..." />}
    </Box>
  );
};
