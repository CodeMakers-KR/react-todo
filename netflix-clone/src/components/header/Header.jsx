import { useRef } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const headerMenu = [
  "시리즈",
  "영화",
  "게임",
  "NEW! 요즘 대체 콘텐츠",
  "내가 찜한 리스트",
  "언어별로 찾아보기",
];

export default function Header() {
  const searchRef = useRef();
  const navigate = useNavigate();

  const searchHandler = (event) => {
    if (event.keyCode === 13) {
      // "/검색어" 로 이동.
      navigate(`/${searchRef.current.value}`);
    }
  };

  return (
    <>
      <div className={styles.headerMenu}>
        <div className="content">
          <ul className={`${styles.headerMainMenu} ${styles.logo}`}>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              홈
            </li>
            {headerMenu.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
            <li className={styles.movieSearch}>
              <input type="text" ref={searchRef} onKeyUp={searchHandler} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
