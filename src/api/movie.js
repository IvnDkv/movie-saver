import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://rickandmortyapi.com/api/character',
};

export const getMovies = () => axios.request(options)