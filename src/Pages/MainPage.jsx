import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getGenres, getMovies, setLoading } from "../Redux/Actions/actions";
import Categories from "../components/Categories";

const MainPage = () => {
  const dispatch = useDispatch();
  const { genres } = useSelector((store) => ({
    genres: store.movieReducer.genres,
  }));

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getMovies());
    dispatch(getGenres());
  }, []);
  // console.log(genres);

  return (
    <div>
      <Hero />
      {genres.map((genre) => (
        <Categories key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
