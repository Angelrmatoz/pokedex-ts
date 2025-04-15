import axios from "axios";
import { Welcome } from "../interfaces/pokedex";

export const getPokedex = async (id:number):Promise<Welcome> => { 
  const { data } = await axios.get<Welcome>(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return data;
}
