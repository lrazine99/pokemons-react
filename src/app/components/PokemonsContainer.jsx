import { useState, useEffect } from "react";
import { getPokemons } from "../helpers/apiHandler";
import PokemonCard from "./PokemonCard";
import Link from "next/link";

function PokemonsContainer() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemons = await getPokemons();

        setPokemons(pokemons);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };

    fetchPokemons();
  }, []);

  return loading ? (
    <p>loding</p>
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
