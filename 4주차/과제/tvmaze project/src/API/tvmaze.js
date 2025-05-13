import axios from "axios";

export const searchShows = async (search) => {
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${search}`
  );
  return response.data;
};

export const getShowDetails = async (id) => {
  const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  return response.data;
};
