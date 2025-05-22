import { useState } from "react";
import MainHeader from "./MainHeader";
import RecommendMovieList, { MovieList } from "./MovieList";

export default function NetflixMain() {
  const [chosenGenre, setChosenGenre] = useState();
  const changeGenreHandler = (event) => {
    setChosenGenre(event.currentTarget.value);
  };

  return (
    <>
      <MainHeader genre={chosenGenre} onChangeGenre={changeGenreHandler} />
      {!chosenGenre && (
        <>
          <RecommendMovieList sectionTitle="회원님을 위해 엄선한 오늘의 콘텐츠" />
          <RecommendMovieList sectionTitle="공포영화 보고 여름을 시원하게 보내자!" />
          <RecommendMovieList sectionTitle="달달한 로맨스 영화 콘텐츠" />
        </>
      )}
      {chosenGenre && <MovieList chosenGenreId={chosenGenre} />}
    </>
  );
}
