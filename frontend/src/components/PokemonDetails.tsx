import { Pokemon } from "../interfaces/pokemonInterfaces";

interface Props {
  pokemon: Pokemon;
}

export const PokemonDetails = ({ pokemon }: Props) => {
  return (
    <div className="row flex-column col-lg-9 col-sm-8 mx-auto">
      <h1 className="my-3">{pokemon.name}</h1>
      <div className="d-flex gap-3 row mx-auto">
        <h3 className="p-0 text-secondary">Información general</h3>
        <div className="d-flex flex-column border rounded p-2 col-lg-2 col-md-3 align-items-center">
          <h4 className="text-success">{pokemon.height}</h4>
          <h5 className="">Altura</h5>
        </div>
        <div className="d-flex flex-column border rounded p-2 col-lg-2 col-md-3 align-items-center">
          <h4 className="text-success">{pokemon.base_experience}</h4>
          <h5 className="">Experiencia</h5>
        </div>
        <div className="d-flex flex-column border rounded p-2 col-lg-2 col-md-3 align-items-center">
          <h4 className="text-success">{pokemon.weight}kg</h4>
          <h5 className="">Peso</h5>
        </div>
        <div className="d-flex flex-column border rounded p-2 col-lg-2 col-md-3 align-items-center">
          <h4 className="text-success">{pokemon.types[0].type.name}</h4>
          <h5 className="">Tipo</h5>
        </div>

        <h3 className="p-0 text-secondary">Información de batalla</h3>
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name} className="d-flex flex-column border rounded p-2 col-lg-2 col-md-3 align-items-center">
            <h4 className="text-danger">{stat.base_stat}</h4>
            <h5 className="">{stat.stat.name}</h5>
          </div>
        ))}
      </div>
      <div>
        <h3 className="my-3 text-secondary">Habilidades</h3>
        <ul>
          {pokemon.abilities.map((h) => (
            <li key={h.ability.name}>{h.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
