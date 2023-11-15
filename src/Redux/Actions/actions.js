import axios from "axios";
import { actionTypes } from "./actionTypes";
import { options } from "../../Constants/apiConstants";
// Tüm atılan isteklerin başına gelir
axios.defaults.baseURL = "https://api.themoviedb.org/3";

//Senkron(Anında Gerçekleşen süre gerketirmeyen işlemler)
export const setLoading = (payload) => {
  return {
    type: actionTypes.SET_LOADİNG,
    payload: payload,
  };
};
export const getMovies = () => {
  //ASENKRON
  // async===>asekron yani anlık gerçekleşmeyen ve süreç gerektiren işlemler(APİ ÇAĞRILARI,VERİ TABANI İSTEKLERİ)
  return async function (dispatch) {
    axios
      .get("/movie/popular", options)
      .then((response) =>
        dispatch({
          type: actionTypes.GET_MOVİE,
          payload: response.data.results,
        })
      )
      .catch((error) => console.log(error));
  };
};

//Filmler için kategori verisi çekme

export const getGenres = () => (dispatch) => {
  axios
    .get("/genre/movie/list?language=tr", options)
    //Sonucu reducer'a gönderme işlemi
    .then((response) =>
      dispatch({
        type: actionTypes.SET_CATEGORY,
        payload: response.data.genres,
      })
    );
};
