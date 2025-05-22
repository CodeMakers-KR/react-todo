import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import listStyles from "./MovieList.module.css";
import itemStyles from "./MovieItem.module.css";
import { CircleButton } from "../ui/Button";

export default function RecommendMovieList({ sectionTitle }) {
  const recommendMovieList = useSelector((store) => store.movie);

  if (!recommendMovieList.results) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${listStyles.recommendMovie} content`}>
      <h3>{sectionTitle}</h3>
      <div>
        <Slider
          dots={false}
          infinite={true}
          slidesToShow={8}
          slidesToScroll={8}
          speed={1000}
          responsive={[
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
              },
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
          ]}
        >
          {recommendMovieList.results.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export function MovieItem({ id, genre_ids, poster_path, release_date, title }) {
  const genreList = useSelector((store) => store.genre);
  if (!genreList || genreList.length === 0) {
    return <div>Loading...</div>;
  }

  const moviesGenreList = genreList.filter((genre) =>
    genre_ids.includes(genre.id)
  );

  return (
    <div className={itemStyles.movieItem}>
      <div>
        <img
          alt={title}
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
        />
        <div className="buttons-container">
          <div>
            <CircleButton color="white-button" icon="play-icon-center" />
            <CircleButton color="transparent-button" icon="plus-icon-center" />
            <CircleButton color="transparent-button" icon="good-icon-center" />
          </div>
          <CircleButton color="transparent-button" icon="more-icon-center" />
        </div>
        <div className={`${itemStyles.movieDetailInfoContainer} age-15 hd`}>
          {release_date}
        </div>
        <ul className={itemStyles.tags}>
          {moviesGenreList.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
