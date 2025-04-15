import { getPokedex } from "./api/api-pokemon";

getPokedex(8) 
  .then(pokemon => {
    console.log('Nombre del Pokémon:', pokemon.name);
  })
  .catch(error => {
    console.error('Error:', error);
  });
