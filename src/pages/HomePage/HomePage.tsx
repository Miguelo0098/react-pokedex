import React from "react";
import { PokemonList } from "./components/PokemonList/PokemonList";

export interface IHomePageProps {}

export const HomePage = (props: IHomePageProps) => {
  return (
    <div>
      Home page
      <PokemonList />
    </div>
  );
};
