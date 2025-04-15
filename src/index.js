define(["require", "exports", "./api/api-pokemon"], function (require, exports, api_pokemon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, api_pokemon_1.getPokedex)(5)
        .then(item => console.log("Nombre del Pokémon:", item.name))
        .catch(error => console.error("Error al obtener el Pokémon:", error));
});
