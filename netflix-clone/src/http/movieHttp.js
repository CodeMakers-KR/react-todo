const apiReadToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2MwYzQ2YjdmZDYxODFiMTJhNWQ4OWQyYTQwYzBhOCIsIm5iZiI6MTY3Nzg4NjE5OS41MjEsInN1YiI6IjY0MDI4MmY3Njk5ZmI3MDBlNmZmMDE2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fBH_IVWue-P47P_uquwyO3lmeCaJxdhEdhVXZBWq10c";

export async function loadGenres() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=ko",
    options
  );

  const json = await response.json();
  return json;
}

export async function loadMovies(genreId = "") {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=ko-KR&page=1&region=ko&sort_by=popularity.desc&with_genres=${genreId}`,
    options
  );

  const json = await response.json();
  return json;
}

export async function loadMovie(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
    options
  );
  const json = await response.json();
  return json;
}

export async function loadActors(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`,
    options
  );
  const json = await response.json();
  return json;
}

export async function loadActorsMovie(actorId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/person/${actorId}/movie_credits?language=ko-KR`,
    options
  );

  const json = await response.json();
  return json;
}

export async function loadSimilarMovies(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=ko-KR&page=1`,
    options
  );
  const json = await response.json();
  return json;
}

export async function searchMovies(searchKeyword) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&include_adult=false&language=ko-KR&page=1`,
    options
  );

  const json = await response.json();
  return json.results;
}
