import { configureStore } from "@reduxjs/toolkit";
import { genreSliceStore } from "./slice/genreSlice";
import { movieSlice } from "./slice/movieSlice";
import { Provider } from "react-redux";

const netflixStore = configureStore({
  reducer: {
    genre: genreSliceStore.reducer,
    movie: movieSlice.reducer,
  },
});

export default function MovieStore({ children }) {
  return <Provider store={netflixStore}>{children}</Provider>;
}
