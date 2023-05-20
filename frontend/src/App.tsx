// import { Button, Stack } from "react-bootstrap";
import { useState } from "react";
import { Autocomplete } from "./components/Autocomplete";
import { usePokemonNames } from "./hooks/useGetPokemonNames";
import { Pokemon } from "./interfaces/pokemonInterfaces";
import { pokemonApi } from "./api/pokemonApi";
import ReactLoading from "react-loading";
import { PokemonView } from "./components/PokemonView";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isloading, setIsloading] = useState(false);
  const { pokemonNames } = usePokemonNames();

  const handleChange = (value: string) => {
    setIsloading(true);
    pokemonApi
      .get<Pokemon>(`/pokemon/${value}`)
      .then((data) => {
        setPokemon(data.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <div className="row px-3">
      <div className="col-lg-6 col-md-8 col-sm-10 m-auto p-2">
        <Autocomplete data={pokemonNames} onChange={handleChange} />
      </div>
      {isloading ? (
        <div className="row justify-content-center align-items-center mt-5 pt-5">
          <ReactLoading type="spin" color={'#000'} height={75} width={75} />
        </div>
      ) : (
        <PokemonView pokemon={pokemon} />
      )}
    </div>
  );
};

export default App;
