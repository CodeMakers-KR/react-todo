import { useEffect, useImperativeHandle, useRef, useState } from "react";
import {
  loadMovie,
  loadActors,
  loadSimilarMovies,
  loadActorsMovie,
} from "../../http/movieHttp";
import { MovieItem } from "./MovieList";

export default function MovieDetail({ movieId, modalRef }) {
  const detailRef = useRef();
  useImperativeHandle(modalRef, () => ({
    open() {
      detailRef.current.showModal();
    },
    close() {
      detailRef.current.close();
    },
  }));

  const [movie, setMovie] = useState();
  const [casts, setCasts] = useState();
  const [similar, setSimilar] = useState();
  const [actorsMovie, setActorsMovie] = useState();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchMovie = async () => {
      const movieJson = await loadMovie(movieId);
      setMovie(movieJson);
    };
    const fetchCasts = async () => {
      const castsJson = await loadActors(movieId);
      setCasts(castsJson);
    };
    const fetchSimilar = async () => {
      const similarJson = await loadSimilarMovies(movieId);
      setSimilar(similarJson);
    };

    fetchMovie();
    fetchCasts();
    fetchSimilar();
  }, [movieId]);

  useEffect(() => {
    setActorsMovie([]);
    if (casts) {
      const fetchActorsMovie = async (actorId) => {
        const credits = await loadActorsMovie(actorId);
        setActorsMovie((prevState) => {
          return [...prevState, ...credits.cast];
        });
      };

      casts.cast?.forEach(({ id }) => {
        fetchActorsMovie(id);
      });
    }
  }, [casts]);

  console.log("Movie", movie);
  console.log("Casts", casts);
  console.log("Similar", similar);
  console.log("ActorsMovie", actorsMovie);

  if (!movie || !casts || !similar || !actorsMovie) {
    return <dialog ref={detailRef}>Loading...</dialog>;
  }

  return (
    <dialog ref={detailRef}>
      <div className="movie-detail-info">
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
        />
        <img
          alt={movie.title}
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        />
        <h3>{movie.title}</h3>
        <div>{movie.overview}</div>
      </div>
      <div className="movie-detail-casts">
        <ul>
          {casts.cast.map(({ cast_id, name }) => (
            <li key={`${cast_id}_${name}`}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="movie-detail-cast-movies">
        {actorsMovie.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
      <div className="movie-detail-similar">
        {similar.results.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </dialog>
  );
}
