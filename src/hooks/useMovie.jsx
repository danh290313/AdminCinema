import {
  getAllMovies as getAllMoviesService,
  getMovie as getMovieService,
 addMovieService
} from "@/services/movieApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
function useMovie() {
  const nav = useNavigate();
  const { token } = useAuth();
  const getAllMovies = async (page) => {
    const res = await getAllMoviesService(page, token);
    return res;
  };
  const getMovie = async (id) => {
    const res = await getMovieService(id, token);
    return res;
  };

  const addMovie = async (data, token) => {
    const res = await addMovieService(data, token);

    if (res?.status === 201)
    {
      toastSuccess(res.message);
      
      nav("/dashboard/movie");
    }  
    
    else
      toastError(res.message);
    return res;
  }

  // const deleteWarehouse = async (id) => {
  //   const { data } = await deleteWarehouseService(id, token);
  //   if (data.status === "success") {
  //     toastSuccess(data.msg);
  //   } else {
  //     toastError(data.msg);
  //   }
  //   return data;
  // };
  // const getWarehouse = async (id) => {
  //   const { data } = await getWarehouseService(id, token);
  //   !data && toastError("Error finding warehouse");
  //   return data;
  // };


  return { getAllMovies, getMovie,addMovie };
}

export default useMovie;
