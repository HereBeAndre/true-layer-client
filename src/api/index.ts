import axios from 'axios';
import { IPokemonDataServerResponse } from 'schemas/pokemonData_d';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/pokemon/',
});

export const fetchData = (query: string) =>
  axiosInstance.get<string, IPokemonDataServerResponse>(query);
