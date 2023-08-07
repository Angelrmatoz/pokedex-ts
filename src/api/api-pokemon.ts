import axios from "axios";
import { Pokedex } from "../interfaces/pokedex";

export const getPokedex = async (id: number):Promise<Pokedex> => {
  const {data} = await axios.get<Pokedex>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return data;
};
