import { getPokedex } from "./api/api-pokemon";

getPokedex(6).then(item=>console.log(item))