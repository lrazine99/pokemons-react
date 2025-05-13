import axios from "axios";

const pokemonApi = "https://nestjs-pokedex-api.vercel.app";

export const getPokemons = async (
  params = {
    page: 1,
    limit: 50,
    typeId: null,
    types: [],
    name: "",
  }
) => {
  console.log("params", params);
  
  let { page, limit, typeId, types, name } = params;

  try {
    let params = "";

    if (page < 1) {
      page = 1;
    }

    if ((limit && limit < 10) || limit > 100) {
      limit = 50;
    }

    if (page) {
      params += `?page=${page}&limit=${limit}`;
    } else {
      params += `?limit=${limit}`;
    }
    if (typeId) {
      params += `&typeId=${typeId}`;
    }
    if (types.length > 0) {
      if (types.length === 1) {
        params += `&typeId=${types[0]}`;
      } else {
        params += `&types=${types.join("&types=")}`;
      }
    }

    if (name) {
      params += `&name=${name}`;
    }
    console.log(`${pokemonApi}/pokemons${params}`);

    const res = await axios.get(`${pokemonApi}/pokemons${params}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getPokemonByPokedexId = async (pokedexId) => {
  try {
    const res = await axios.get(`${pokemonApi}/pokemons/${pokedexId}`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getTypes = async () => {
  try {
    const res = await axios.get(`${pokemonApi}/types`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
