import { useRef, useState } from "react";
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
  const [searchStyle, setSearchStyle] = useState("");
  const searchRef = useRef();
  const navigate = useNavigate();

  const searchClickHandler = () => {
    setSearchStyle(styles.hover);
    searchRef.current.focus();
  };

  const searchHandler = (event) => {
    if (event.keyCode === 13) {
      // "/검색어" 로 이동.
      const searchKeyword = searchRef.current.value;
      setSearchStyle("");
      searchRef.current.value = "";
      navigate(`/${searchKeyword}`);
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
            <li onClick={searchClickHandler} className={styles.movieSearch}>
              <input
                type="text"
                className={searchStyle}
                ref={searchRef}
                onKeyUp={searchHandler}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
