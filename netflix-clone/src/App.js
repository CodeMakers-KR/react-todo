import Header from "./components/header/Header";
import MovieStore from "./stores/MovieStore";

function App() {
  return (
    <MovieStore>
      <Header />
      <div className="main-wrapper">
        <header>
          <video
            className="video-thumbnail"
            src="https://0d660885-1389-47bb-8c9a-94dd6a5d6f89.mdnplay.dev/shared-assets/videos/flower.webm"
          ></video>
          <div className="content big-header">
            <div>
              <h1 className="top-movie-subject">브로큰</h1>
              <h2 className="top-movie-1">
                <div className="top10">
                  <div className="top">TOP</div>
                  <div className="top-number">10</div>
                </div>
                오늘 영화 순위 1위
              </h2>
              <p className="top-movie-summary">
                조폭 생활을 청산하고 평범하게 살아가던 남자. 어느 날 의문의
                죽임을 당한 동생의 진실을 좆던 그는, 그 사건을 소름끼치도록
                정확히 예견한 한 소설가와 마주친다.
              </p>
              <button className="white-button play-icon">재생</button>
              <button className="tranparent-50-button info-icon">
                상세정보
              </button>
            </div>
          </div>
        </header>

        <div className="recommend-movie content">
          <h3>회원님을 위해 엄선한 오늘의 콘텐츠</h3>
          <ul className="movie-list">
            <li>
              <div>
                <img src="https://occ-0-993-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZSNTnp6o8l1GujbemAfcT9yFsp6G8Bx6-9n8yd6pLjKRhoCbIeJ85CUNPsNGpbAzkJ7Pq12GB1-PVN9OoXa-qF4ll8IRrlBp3DgD--FuuPLO2bPZ6mtOe-ZQVVwBY_mxUahANhPOXs0YUw7-1mF_2sv7rQ25t0BDW-VlEBKU9Z4zHEk0TqN4PdVBT1Ok2coFRLacDq_C2eS8ewPz8vbr-tyXcL18Knb_1xaAw.jpg?r=008" />
                <div className="buttons-container">
                  <div>
                    <button className="circle-button white-button play-icon-center"></button>
                    <button className="circle-button transparent-button plus-icon-center"></button>
                    <button className="circle-button transparent-button good-icon-center"></button>
                  </div>
                  <button className="circle-button transparent-button more-icon-center"></button>
                </div>
                <div className="movie-detail-info-container age-15 hd">
                  1시간 39분
                </div>
                <ul className="tags">
                  <li>어두운</li>
                  <li>미스터리</li>
                  <li>아마추어 형사 & 탐정</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <img src="https://occ-0-993-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZSNTnp6o8l1GujbemAfcT9yFsp6G8Bx6-9n8yd6pLjKRhoCbIeJ85CUNPsNGpbAzkJ7Pq12GB1-PVN9OoXa-qF4ll8IRrlBp3DgD--FuuPLO2bPZ6mtOe-ZQVVwBY_mxUahANhPOXs0YUw7-1mF_2sv7rQ25t0BDW-VlEBKU9Z4zHEk0TqN4PdVBT1Ok2coFRLacDq_C2eS8ewPz8vbr-tyXcL18Knb_1xaAw.jpg?r=008" />
                <div className="buttons-container">
                  <div>
                    <button className="circle-button white-button play-icon-center"></button>
                    <button className="circle-button transparent-button plus-icon-center"></button>
                    <button className="circle-button transparent-button good-icon-center"></button>
                  </div>
                  <button className="circle-button transparent-button more-icon-center"></button>
                </div>
                <div className="movie-detail-info-container age-15 hd">
                  1시간 39분
                </div>
                <ul className="tags">
                  <li>어두운</li>
                  <li>미스터리</li>
                  <li>아마추어 형사 & 탐정</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <img src="https://occ-0-993-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZSNTnp6o8l1GujbemAfcT9yFsp6G8Bx6-9n8yd6pLjKRhoCbIeJ85CUNPsNGpbAzkJ7Pq12GB1-PVN9OoXa-qF4ll8IRrlBp3DgD--FuuPLO2bPZ6mtOe-ZQVVwBY_mxUahANhPOXs0YUw7-1mF_2sv7rQ25t0BDW-VlEBKU9Z4zHEk0TqN4PdVBT1Ok2coFRLacDq_C2eS8ewPz8vbr-tyXcL18Knb_1xaAw.jpg?r=008" />
                <div className="buttons-container">
                  <div>
                    <button className="circle-button white-button play-icon-center"></button>
                    <button className="circle-button transparent-button plus-icon-center"></button>
                    <button className="circle-button transparent-button good-icon-center"></button>
                  </div>
                  <button className="circle-button transparent-button more-icon-center"></button>
                </div>
                <div className="movie-detail-info-container age-15 hd">
                  1시간 39분
                </div>
                <ul className="tags">
                  <li>어두운</li>
                  <li>미스터리</li>
                  <li>아마추어 형사 & 탐정</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="recommend-movie content">
          <h3>회원님을 위해 엄선한 오늘의 콘텐츠</h3>
          <ul className="movie-list">
            <li>
              <div>
                <img src="https://occ-0-993-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZSNTnp6o8l1GujbemAfcT9yFsp6G8Bx6-9n8yd6pLjKRhoCbIeJ85CUNPsNGpbAzkJ7Pq12GB1-PVN9OoXa-qF4ll8IRrlBp3DgD--FuuPLO2bPZ6mtOe-ZQVVwBY_mxUahANhPOXs0YUw7-1mF_2sv7rQ25t0BDW-VlEBKU9Z4zHEk0TqN4PdVBT1Ok2coFRLacDq_C2eS8ewPz8vbr-tyXcL18Knb_1xaAw.jpg?r=008" />
                <div className="buttons-container">
                  <div>
                    <button className="circle-button white-button play-icon-center"></button>
                    <button className="circle-button transparent-button plus-icon-center"></button>
                    <button className="circle-button transparent-button good-icon-center"></button>
                  </div>
                  <button className="circle-button transparent-button more-icon-center"></button>
                </div>
                <div className="movie-detail-info-container age-15 hd">
                  1시간 39분
                </div>
                <ul className="tags">
                  <li>어두운</li>
                  <li>미스터리</li>
                  <li>아마추어 형사 & 탐정</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <img src="https://occ-0-993-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZSNTnp6o8l1GujbemAfcT9yFsp6G8Bx6-9n8yd6pLjKRhoCbIeJ85CUNPsNGpbAzkJ7Pq12GB1-PVN9OoXa-qF4ll8IRrlBp3DgD--FuuPLO2bPZ6mtOe-ZQVVwBY_mxUahANhPOXs0YUw7-1mF_2sv7rQ25t0BDW-VlEBKU9Z4zHEk0TqN4PdVBT1Ok2coFRLacDq_C2eS8ewPz8vbr-tyXcL18Knb_1xaAw.jpg?r=008" />
                <div className="buttons-container">
                  <div>
                    <button className="circle-button white-button play-icon-center"></button>
                    <button className="circle-button transparent-button plus-icon-center"></button>
                    <button className="circle-button transparent-button good-icon-center"></button>
                  </div>
                  <button className="circle-button transparent-button more-icon-center"></button>
                </div>
                <div className="movie-detail-info-container age-15 hd">
                  1시간 39분
                </div>
                <ul className="tags">
                  <li>어두운</li>
                  <li>미스터리</li>
                  <li>아마추어 형사 & 탐정</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <img src="https://occ-0-993-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZSNTnp6o8l1GujbemAfcT9yFsp6G8Bx6-9n8yd6pLjKRhoCbIeJ85CUNPsNGpbAzkJ7Pq12GB1-PVN9OoXa-qF4ll8IRrlBp3DgD--FuuPLO2bPZ6mtOe-ZQVVwBY_mxUahANhPOXs0YUw7-1mF_2sv7rQ25t0BDW-VlEBKU9Z4zHEk0TqN4PdVBT1Ok2coFRLacDq_C2eS8ewPz8vbr-tyXcL18Knb_1xaAw.jpg?r=008" />
                <div className="buttons-container">
                  <div>
                    <button className="circle-button white-button play-icon-center"></button>
                    <button className="circle-button transparent-button plus-icon-center"></button>
                    <button className="circle-button transparent-button good-icon-center"></button>
                  </div>
                  <button className="circle-button transparent-button more-icon-center"></button>
                </div>
                <div className="movie-detail-info-container age-15 hd">
                  1시간 39분
                </div>
                <ul className="tags">
                  <li>어두운</li>
                  <li>미스터리</li>
                  <li>아마추어 형사 & 탐정</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="recommend-movie content">
          <h3>회원님을 위해 엄선한 오늘의 콘텐츠</h3>
          <ul className="movie-list">
            <li>
              <div>
                <img src="https://occ-0-993-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZSNTnp6o8l1GujbemAfcT9yFsp6G8Bx6-9n8yd6pLjKRhoCbIeJ85CUNPsNGpbAzkJ7Pq12GB1-PVN9OoXa-qF4ll8IRrlBp3DgD--FuuPLO2bPZ6mtOe-ZQVVwBY_mxUahANhPOXs0YUw7-1mF_2sv7rQ25t0BDW-VlEBKU9Z4zHEk0TqN4PdVBT1Ok2coFRLacDq_C2eS8ewPz8vbr-tyXcL18Knb_1xaAw.jpg?r=008" />
                <div className="buttons-container">
                  <div>
                    <button className="circle-button white-button play-icon-center"></button>
                    <button className="circle-button transparent-button plus-icon-center"></button>
                    <button className="circle-button transparent-button good-icon-center"></button>
                  </div>
                  <button className="circle-button transparent-button more-icon-center"></button>
                </div>
                <div className="movie-detail-info-container age-15 hd">
                  1시간 39분
                </div>
                <ul className="tags">
                  <li>어두운</li>
                  <li>미스터리</li>
                  <li>아마추어 형사 & 탐정</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <img src="https://occ-0-993-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZSNTnp6o8l1GujbemAfcT9yFsp6G8Bx6-9n8yd6pLjKRhoCbIeJ85CUNPsNGpbAzkJ7Pq12GB1-PVN9OoXa-qF4ll8IRrlBp3DgD--FuuPLO2bPZ6mtOe-ZQVVwBY_mxUahANhPOXs0YUw7-1mF_2sv7rQ25t0BDW-VlEBKU9Z4zHEk0TqN4PdVBT1Ok2coFRLacDq_C2eS8ewPz8vbr-tyXcL18Knb_1xaAw.jpg?r=008" />
                <div className="buttons-container">
                  <div>
                    <button className="circle-button white-button play-icon-center"></button>
                    <button className="circle-button transparent-button plus-icon-center"></button>
                    <button className="circle-button transparent-button good-icon-center"></button>
                  </div>
                  <button className="circle-button transparent-button more-icon-center"></button>
                </div>
                <div className="movie-detail-info-container age-15 hd">
                  1시간 39분
                </div>
                <ul className="tags">
                  <li>어두운</li>
                  <li>미스터리</li>
                  <li>아마추어 형사 & 탐정</li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <img src="https://occ-0-993-1361.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZSNTnp6o8l1GujbemAfcT9yFsp6G8Bx6-9n8yd6pLjKRhoCbIeJ85CUNPsNGpbAzkJ7Pq12GB1-PVN9OoXa-qF4ll8IRrlBp3DgD--FuuPLO2bPZ6mtOe-ZQVVwBY_mxUahANhPOXs0YUw7-1mF_2sv7rQ25t0BDW-VlEBKU9Z4zHEk0TqN4PdVBT1Ok2coFRLacDq_C2eS8ewPz8vbr-tyXcL18Knb_1xaAw.jpg?r=008" />
                <div className="buttons-container">
                  <div>
                    <button className="circle-button white-button play-icon-center"></button>
                    <button className="circle-button transparent-button plus-icon-center"></button>
                    <button className="circle-button transparent-button good-icon-center"></button>
                  </div>
                  <button className="circle-button transparent-button more-icon-center"></button>
                </div>
                <div className="movie-detail-info-container age-15 hd">
                  1시간 39분
                </div>
                <ul className="tags">
                  <li>어두운</li>
                  <li>미스터리</li>
                  <li>아마추어 형사 & 탐정</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </MovieStore>
  );
}

export default App;
