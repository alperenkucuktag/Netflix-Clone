import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseİmgUrl, options } from "../Constants/apiConstants";
import Loading from "../components/Loading";
import Badget from "../components/Badget";
const DetailPage = () => {
  const { movie_id } = useParams();
  const [detail, setDetail] = useState(null);
  // console.log(useParams());
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
      .then((response) => setDetail(response.data));
  });
  // console.log(detail);
  const profit = detail?.revenue - detail?.budget;
  if (!detail) return <Loading />;
  return (
    <div className='movie-detail row p-4 gap-3'>
      <div className='col-md-3 d-flex align-items-center justify-content-center'>
        <div className='position-relative'>
          <img
            src={baseİmgUrl.concat(detail.poster_path)}
            className='img-fluid rounded shadow-lg'
            alt=''
          />
          <span className=' vote bg-warning p-1 rounded shadow position-absolute  me-5'>
            {detail.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
      <div className='col-md-8'>
        <h1>{detail.title}</h1>
        <p>{detail.overview}</p>
        <div className='row'>
          <div className='col-6 col-md-12'>
            <p>Maliyet: {detail.budget}$</p>
            <p>Hasılat: {detail.revenue}$</p>
            <p>Kar: {profit}$ </p>
          </div>
          <div className='col-6 col-md-12'>
            <Badget barTitle={"Kategoriler:"} badgetTitle={detail.genres} />
            <Badget
              barTitle={"Diller:"}
              badgetTitle={detail.spoken_languages}
            />
            <Badget
              barTitle={"Yapımcı Şirketler:"}
              badgetTitle={detail.production_companies}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
