import { useEffect, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonListResponse } from "../interfaces/pokemonInterfaces";

export const usePokemonNames = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>([]);

  useEffect(() => {
    pokemonApi.get<PokemonListResponse>('/pokemon?limit=1281')
    .then(response => {
        const result = response.data.results.map(pokemon => pokemon.name)
        setPokemonNames(result)
    })
  }, [])

  return {
    pokemonNames
  };
};
