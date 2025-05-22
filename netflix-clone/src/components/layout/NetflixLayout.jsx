import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import MovieStore from "../../stores/MovieStore";

export default function NetflixLayout() {
  return (
    <MovieStore>
      <Header />
      <Outlet />
    </MovieStore>
  );
}
