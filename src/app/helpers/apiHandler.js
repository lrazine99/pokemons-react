import axios from "axios";

const pokemonApi = "https://nestjs-pokedex-api.vercel.app";

export const getPokemons = async ({
  page = 1,
  limit = 50,
  typeId,
  types,
  name,
} = {}) => {
  try {
    let params = "";

    if (page < 1) {
      page = 1;
    }

    if (limit && limit < 10 || limit > 100) {
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
    if (types) {
      params += `&types=${types.join("&types=")}`;
    }
    if (name) {
      params += `&name=${name}`;
    }

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
