import { Pokemon } from "../interfaces/pokemonInterfaces";
import { PokemonDetails } from "./PokemonDetails";

interface Props {
  pokemon: Pokemon | undefined;
}

export const PokemonView = ({ pokemon }: Props) => {
  return (
    <>
      {
        !pokemon ? (
          <div className="d-flex justify-content-center align-items-center py-5">
            <h2>No pokemon</h2>
          </div>
        ) : (
          <div className="row col-lg-10 col-md-12 mt-5 mx-auto">
            {!pokemon.sprites.other?.dream_world.front_default ? (
              <img
                src="/nodisponible.png"
                alt="No disponible"
                className="col-lg-3 col-sm-4 col-sx-10"
              />
            ) : (
              <img
                src={pokemon.sprites.other?.dream_world.front_default}
                alt={pokemon.name}
                className="col-lg-3 col-sm-4 col-sx-10"
              />
            )}
            <PokemonDetails pokemon={pokemon} />
          </div>
        )
      }
    </>
  );
};
