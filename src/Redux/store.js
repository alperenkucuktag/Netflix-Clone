import { createStore, combineReducers, applyMiddleware } from "redux";
import { movieReducer } from "./Reducers/movieReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movieReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));
