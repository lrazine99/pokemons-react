"use client";

import React from "react";
import Link from "next/link";
import CustomButton from "../../components/CustomButton";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getPokemonByPokedexId } from "../../helpers/apiHandler";

export default function PokemonPage({ params }) {
  const { id: pokemonId } = params;
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemon = await getPokemonByPokedexId(pokemonId);

        setPokemon(pokemon);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };

    fetchPokemons();
  }, []);

  return loading ? (
    <p>loading</p>
  ) : (
    <div className="p-4">
      <Link href="/">
        <CustomButton text="Retour"></CustomButton>
      </Link>

      <h1 className="text-2xl font-bold text-center py-2">
        Détails du Pokémon
      </h1>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">Pokémon ID: {pokemon.id}</h2>
        <p className="text-gray-700">
          Détails supplémentaires sur le Pokémon ici.
        </p>
        <div className="mt-4">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            className="rounded-lg shadow-md mb-4"
            width={200}
            height={200}
          />
        </div>
        <div className="mt-4">
          <p className="text-gray-700">Nom: Pokémon {pokemon.name}</p>
        </div>
      </div>
    </div>
  );
}
