import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGenres, loadMovies } from "../../http/movieHttp";
import { movieActions } from "../../stores/slice/movieSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import styles from "./MainHeader.module.css";
import headerStyles from "../header/Header.module.css";
import { Button } from "../ui/Button";
import { genreActions } from "../../stores/slice/genreSlice";

const BackDrop = styled.div`
  position: absolute;
  background-image: url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${({
    url,
  }) => url}");
  background-size: ${window.innerWidth}px;
  background-repeat: no-repeat;
  width: 100%;
  height: 730px;
  z-index: -1;
`;

export default function MainHeader({ genre, onChangeGenre }) {
  const mainWrapperRef = useRef();

  const [needBlack, setNeedBlack] = useState();

  window.scrollHandler = () => {
    if (mainWrapperRef.current) {
      const rect = mainWrapperRef.current.getBoundingClientRect();
      const top = rect.top;

      setNeedBlack(top <= 0);
    }
  };

  const genreList = useSelector((store) => store.genre);

  const movieList = useSelector((store) => store.movie);
  const mainHeaderDispatcher = useDispatch();

  useEffect(() => {
    if (genreList.length === 0) {
      (async () => {
        const json = await loadGenres();
        mainHeaderDispatcher(genreActions.init(json.genres));
      })();
    }

    (async () => {
      const movieJson = await loadMovies(genre);
      mainHeaderDispatcher(movieActions.reset());
      mainHeaderDispatcher(movieActions.init(movieJson));
    })();
  }, [mainHeaderDispatcher, genre, genreList]);

  if (!movieList.results) {
    return <div>Loading...</div>;
  }

  const bestMovies = movieList?.results?.slice(0, 5);

  return (
    <div className="main-wrapper" ref={mainWrapperRef}>
      <div
        className={`${headerStyles.headerCategory} ${
          needBlack
            ? headerStyles.headerCategoryBlackBackground
            : headerStyles.headerCategoryTransparentBackground
        }`}
      >
        <div className="content">
          <div className={headerStyles.categoryType}>
            <h1>영화</h1>
            <select onChange={onChangeGenre}>
              <option value="">장르</option>
              {genreList.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <header>
        <Slider
          arrows={false}
          dots={false}
          infinite={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          speed={1000}
          autoplaySpeed={10000}
          cssEase="linear"
        >
          {bestMovies.map((movie) => (
            <div key={movie.id} className={styles.sliderItem}>
              <BackDrop url={movie.backdrop_path} />
              <div className={`content ${styles.bigHeader}`}>
                <div>
                  <h1 className={styles.topMovieSubject}>{movie.title}</h1>
                  <h2 className={styles.topMovie1}>
                    <div className={styles.top10}>
                      <div className={styles.top}>TOP</div>
                      <div className={styles.topNumber}>10</div>
                    </div>
                    오늘 영화 순위 1위
                  </h2>
                  <p className={styles.topMovieSummary}>{movie.overview}</p>
                  <Button color="white-button" icon="play-icon" text="재생" />
                  <Button
                    color="tranparent-50-button"
                    icon="info-icon"
                    text="상세정보"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </header>
    </div>
  );
}
