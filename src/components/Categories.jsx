import axios from "axios";
import React, { useEffect, useState } from "react";
import { options } from "../Constants/apiConstants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { baseİmgUrl } from "../Constants/apiConstants";
import { Link } from "react-router-dom";
const Categories = ({ genre }) => {
  const [film, setFilm] = useState(null);
  useEffect(() => {
    axios
      .get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((response) => setFilm(response.data.results));
  }, []);
  console.log(film);
  return (
    <div>
      <h1 className='fs-1 mb-3 mt-3'>{genre.name}</h1>
      <Splide
        options={{
          padding: "15px",
          gap: "10px",
          autoWidth: true,
          pagination: false,
        }}
        aria-label='My Favorite Images'
      >
        {film?.map((movies) => (
          <SplideSlide>
            <Link to={`/movie/${movies.id}`}>
              <img
                className='movies'
                src={baseİmgUrl.concat(movies.poster_path)}
                alt='Image 1'
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Categories;
