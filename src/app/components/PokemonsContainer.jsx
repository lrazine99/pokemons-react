import { useState, useEffect } from "react";
import { getPokemons } from "../helpers/apiHandler";
import PokemonCard from "./PokemonCard";
import Link from "next/link";
import CustomLoader from "./CustomLoader";
import { useFilter } from '../hooks/FiltersContext';

function PokemonsContainer() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const { nameFilter, limitFilter, typesFilter } = useFilter();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {

        const filterParams = {
          page: 1,
          limit: limitFilter,
          types: typesFilter.map((type) => type.id),
          name: nameFilter,
        };

        console.log("filterParams", filterParams);
        

        const pokemons = await getPokemons(filterParams);

      
        setPokemons(pokemons);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };

    fetchPokemons();
  }, [nameFilter, limitFilter, typesFilter]);

 
  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <CustomLoader />
    </div>
  ) : (
    <div className="pokemons-container">
      {pokemons.length === 0 && (
        <div>
          <h2>Aucun Pokemons trouvé</h2>
        </div>
      )}

      <div className="flex flex-row flex-wrap justify-center gap-4">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.name} href={`/pokemon/${pokemon.pokedexId}`}>
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PokemonsContainer;
