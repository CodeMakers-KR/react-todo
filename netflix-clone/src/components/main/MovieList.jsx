import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RecommendMovieList({ sectionTitle }) {
  const recommendMovieList = useSelector((store) => store.movie);

  if (!recommendMovieList.results) {
    return <div>Loading...</div>;
  }

  console.log(recommendMovieList.results);

  return (
    <div className="recommend-movie content">
      <h3>{sectionTitle}</h3>
      <div className="movie-list">
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
          {recommendMovieList.results.map(
            ({ id, genre_ids, poster_path, release_date, title }) => (
              <div key={id} className="movie-item">
                <div>
                  <img
                    alt={title}
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
                  />
                  <div className="buttons-container">
                    <div>
                      <button className="circle-button white-button play-icon-center"></button>
                      <button className="circle-button transparent-button plus-icon-center"></button>
                      <button className="circle-button transparent-button good-icon-center"></button>
                    </div>
                    <button className="circle-button transparent-button more-icon-center"></button>
                  </div>
                  <div className="movie-detail-info-container age-15 hd">
                    {release_date}
                  </div>
                  <ul className="tags">
                    {genre_ids.map((id) => (
                      <li key={id}>{id}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
}
