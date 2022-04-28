import axios from 'axios';
import { IPokemonDataServerResponse } from 'schemas/pokemonData_d';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3030/pokemon/',
});

export const fetchData = (query: string) =>
  axiosInstance.get<string, IPokemonDataServerResponse>(query);
