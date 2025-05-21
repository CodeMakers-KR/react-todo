import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../../http/movieHttp";
import { movieActions } from "../../stores/slice/movieSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default function MainHeader() {
  const movieList = useSelector((store) => store.movie);
  const mainHeaderDispatcher = useDispatch();

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

  useEffect(() => {
    (async () => {
      if (!movieList.results) {
        const movieJson = await loadMovies();
        mainHeaderDispatcher(movieActions.init(movieJson));
      }
    })();
  }, [movieList, mainHeaderDispatcher]);

  if (!movieList.results) {
    return <div>Loading...</div>;
  }

  const bestMovies = movieList?.results?.slice(0, 5);

  return (
    <header className="slider-container">
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
        <div className="slider-item">
          <BackDrop url={bestMovies[0].backdrop_path} />
          <div className="content big-header">
            <div>
              <h1 className="top-movie-subject">{bestMovies[0].title}</h1>
              <h2 className="top-movie-1">
                <div className="top10">
                  <div className="top">TOP</div>
                  <div className="top-number">10</div>
                </div>
                오늘 영화 순위 1위
              </h2>
              <p className="top-movie-summary">{bestMovies[0].overview}</p>
              <button className="white-button play-icon">재생</button>
              <button className="tranparent-50-button info-icon">
                상세정보
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </header>
  );
}
