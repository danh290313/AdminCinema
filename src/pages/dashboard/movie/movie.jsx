import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { toast } from "react-toastify";

import { Grid } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import MovieCard from "@/components/card/MovieCard";
import DrinkCardSkeleton from "@/components/card/DrinkCardSkeleton";

import { toastError } from "@/utils/toast";
import useMovie from "@/hooks/useMovie";

export function Movie() {


  const [idChoosing, setIdChoosing] = useState(null);
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getAllMovies } = useMovie();
  useEffect(() => {
    setLoading(true);
    const getMovie = async () => {
      try {
        const res = await getAllMovies();
        setMovie(res);
        setLoading(false);
      } catch (err) {
        toastError(err.message);
      }
    };
    getMovie();
  }, []);
  return (
    <div className="mt-12 mb-8 flex  flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </div>
            <input
              type="search"
              id="default-search"
              className="primary-search"
              placeholder="Search drink"
              required
            />
          </div>
        </div>
        <Link to="add" className="">
          <Button
            variant={"gradient"}
            color={"orange"}
            className="flex items-center px-3 py-1 capitalize"
          >
            <Typography color="inherit" className="font-medium capitalize">
              Add movie
            </Typography>
          </Button>
        </Link>
      </div>
      <Grid container spacing={2}>
        {loading
          ? [1, 2, 3, 4].map((v, i) => {
              return (
                <Grid key={i} item md={6} sm={12}>
                  <DrinkCardSkeleton />
                </Grid>
              );
            })
          : movie.map((movie, i) => (
              <Grid key={i} item md={6} sm={12}>
                <MovieCard data={movie} />
              </Grid>
            ))}
      </Grid>
      
    </div>
  );
}

export default Movie;
