import { useEffect, useImperativeHandle, useRef, useState } from "react";
import {
  loadMovie,
  loadActors,
  loadSimilarMovies,
  loadActorsMovie,
} from "../../http/movieHttp";
import { MovieItem } from "./MovieList";
import styles from "./MovieDetail.module.css";

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

  if (!movieId) {
    return <dialog ref={detailRef}>Loading...</dialog>;
  }

  return (
    <dialog className={styles.detailDialog} ref={detailRef}>
      <Detail movieId={movieId} />
      <Cast movieId={movieId} />
      <Similars movieId={movieId} />
    </dialog>
  );
}

function Detail({ movieId }) {
  const [movie, setMovie] = useState();
  useEffect(() => {
    setMovie(undefined);
    const fetchMovie = async () => {
      const movieJson = await loadMovie(movieId);
      setMovie(movieJson);
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div className={styles.movieDetailInfo}>Loading...</div>;
  }

  return (
    <div className={styles.movieDetailInfo}>
      {movie.backdrop_path && (
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
        />
      )}
      {!movie.backdrop_path && (
        <img
          alt={movie.title}
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
        />
      )}
      <h3>{movie.title}</h3>
      <div>{movie.overview}</div>
    </div>
  );
}

function Cast({ movieId }) {
  const [casts, setCasts] = useState();
  useEffect(() => {
    setCasts(undefined);
    const fetchCasts = async () => {
      const castsJson = await loadActors(movieId);
      setCasts(
        castsJson.cast.filter(
          (actor) => actor.known_for_department === "Acting" && actor.order <= 5
        )
      );
    };
    fetchCasts();
  }, [movieId]);

  if (!casts) {
    return (
      <div className={styles.movieDetailsCasts}>
        <h1>출연배우</h1>
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className={styles.movieDetailsCasts}>
        <h1>출연배우</h1>
        <ul>
          {casts.map(({ cast_id, name }) => (
            <li key={`${cast_id}_${name}`}>{name}</li>
          ))}
        </ul>
      </div>
      <OtherMovies casts={casts} />
    </>
  );
}

function OtherMovies({ casts }) {
  const [actorsMovie, setActorsMovie] = useState();
  useEffect(() => {
    setActorsMovie([]);
    if (casts) {
      const fetchActorsMovie = async (actorId) => {
        const credits = await loadActorsMovie(actorId);
        setActorsMovie((prevState) => {
          const newState = [...prevState];
          const appendMovieList = credits.cast.filter((movie) => {
            const actorsMovieId = movie.id;
            const dupCount = newState.filter(
              (loadedMovie) => loadedMovie.id === actorsMovieId
            ).length;
            return dupCount === 0;
          });

          newState.push(...appendMovieList);
          return newState;
          //   return [...prevState, ...credits.cast];
        });
      };

      casts?.forEach(({ id }) => {
        fetchActorsMovie(id);
      });
    }
  }, [casts]);

  if (!actorsMovie) {
    return (
      <div className={styles.movieDetailCastMovies}>
        <h1>이 영화에 출연한 배우들이 출연한 다른 영화</h1>
        Loading...
      </div>
    );
  }

  return (
    <>
      <h1>이 영화에 출연한 배우들이 출연한 다른 영화</h1>
      <div className={styles.movieDetailCastMovies}>
        {actorsMovie.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

function Similars({ movieId }) {
  const [similar, setSimilar] = useState();
  useEffect(() => {
    setSimilar(undefined);
    const fetchSimilar = async () => {
      const similarJson = await loadSimilarMovies(movieId);
      setSimilar(similarJson);
    };
    fetchSimilar();
  }, [movieId]);

  if (!similar || !similar.results) {
    return (
      <div className={styles.movieDetailSimilar}>
        <h1>유사한 영화</h1>
        Loading...
      </div>
    );
  }

  return (
    <>
      <h1>유사한 영화</h1>
      <div className={styles.movieDetailSimilar}>
        {similar.results.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}
