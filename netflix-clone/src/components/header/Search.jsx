import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MovieItem } from "../main/MovieList";
import { searchMovies } from "../../http/movieHttp";

export default function Search() {
  const { search } = useParams();

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setSearchResult([]);
    (async () => {
      const result = await searchMovies(search);
      setSearchResult(result);
    })();
  }, [search]);

  return (
    <div>
      <h1>'{search}' 검색결과</h1>
      <div>
        {searchResult.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
