import { useRef } from "react";
import Header from "./components/header/Header";
import MovieStore from "./stores/MovieStore";
import MainHeader from "./components/main/MainHeader";

function App() {
  const mainWrapperRef = useRef();

  return (
    <MovieStore>
      <Header mainWrapper={mainWrapperRef} />
      <div className="main-wrapper" ref={mainWrapperRef}>
        <MainHeader />
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
