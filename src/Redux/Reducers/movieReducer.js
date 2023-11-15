import { actionTypes } from "../Actions/actionTypes";

const initialState = {
  popularMovies: [],
  genres: [],
  isLoading: true,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    // Filmleri state aktarma
    case actionTypes.GET_MOVİE:
      return {
        ...state,
        popularMovies: action.payload,
        isLoading: false,
      };
    // Kategorileri state aktarma
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
};
