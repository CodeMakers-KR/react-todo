import { useRef, useState } from "react";
import Header from "./components/header/Header";
import MovieStore from "./stores/MovieStore";
import MainHeader from "./components/main/MainHeader";
import RecommendMovieList from "./components/main/MovieList";

function App() {
  const mainWrapperRef = useRef();

  const [chosenGenre, setChosenGenre] = useState();
  const changeGenreHandler = (event) => {
    setChosenGenre(event.currentTarget.value);
  };

  return (
    <MovieStore>
      <Header mainWrapper={mainWrapperRef} onChangeGenre={changeGenreHandler} />
      <div className="main-wrapper" ref={mainWrapperRef}>
        <MainHeader genre={chosenGenre} />
        {!chosenGenre && (
          <>
            <RecommendMovieList sectionTitle="회원님을 위해 엄선한 오늘의 콘텐츠" />
            <RecommendMovieList sectionTitle="공포영화 보고 여름을 시원하게 보내자!" />
            <RecommendMovieList sectionTitle="달달한 로맨스 영화 콘텐츠" />
          </>
        )}
      </div>
    </MovieStore>
  );
}

export default App;
