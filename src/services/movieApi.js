import { post, deletereq, get, put } from "@/utils/request";
// import images from "~/assets/images/bavarage";
export const getAllMovies = async (page, token) => {
  const res = get("/api/movies", { token });
  return res;
};
export const addMovieService = async (data, token) => { 
  const res = post("/api/movie",  data , { token });
  return res;
}

export const getMovie = async (id, token) => {
  const res = get("/admin/drinks/" + id, { token });
  return res;
};
export const getTypeofMovie = async (token) => {
  const res = get("/type-of-drinks/" ,{}, { token });
  return res;
};

