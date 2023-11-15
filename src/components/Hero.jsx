import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { baseİmgUrl } from "../Constants/apiConstants";
import Header from "./Header";

const Hero = () => {
  //sola yanınmdaki ikinci süslü parantez return'ün yerini tutar
  const { movieList, isLoading } = useSelector((store) => ({
    movieList: store.movieReducer.popularMovies,
    isLoading: store.movieReducer.isLoading,
  }));

  const randomIndex = Math.floor(Math.random() * movieList.length);
  const randomMovie = movieList[randomIndex];

  console.log(randomMovie);

  return (
    <div className='row p-4'>
      {/* Eğer yükleme sürüyorsa */}
      {isLoading && <Loading />}
      {/* Yükleme bittiyse */}
      {!isLoading && (
        <>
          <div className='col-md-6 d-flex flex-column gap-3 align-items-center justify-content-center'>
            <h1>{randomMovie.title}</h1>
            <p>{randomMovie.overview}</p>
            <p className='text-warning fw-bold'>
              IMDB {randomMovie.vote_average}
            </p>
            <div className='d-flex gap-3 '>
              <Link className='btn btn-danger' to={`/movie/${randomMovie.id}`}>
                Filmi İzle
              </Link>
              <Link className='btn btn-info' to={`/movie/${randomMovie.id}`}>
                Listeye Ekle
              </Link>
            </div>
          </div>
          <div className='col-md-6'>
            <img
              className='img-fluid'
              src={`${baseİmgUrl}${randomMovie.backdrop_path}`}
              alt=''
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
