import axios from "axios";

const key = "3bdf8d84efd941199c60a8a1512fa200";

const axiosCreate = axios.create({
  baseURL: 'https://api.rawg.io/api/'
});

const getGenreList = axiosCreate.get('/genres?key='+key);
const getAllGames = axiosCreate.get('/games?key='+key);

export default {
  getGenreList,
  getAllGames
};
