import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGenres } from "../../http/movieHttp";
import { genreActions } from "../../stores/slice/genreSlice";
import styles from "./Header.module.css";

const headerMenu = [
  "홈",
  "시리즈",
  "영화",
  "게임",
  "NEW! 요즘 대체 콘텐츠",
  "내가 찜한 리스트",
  "언어별로 찾아보기",
];

export default function Header() {
  const genreList = useSelector((store) => store.genre);
  const headerDispather = useDispatch();

  useEffect(() => {
    if (genreList.length === 0) {
      (async () => {
        const json = await loadGenres();
        headerDispather(genreActions.init(json.genres));
      })();
    }
  }, [genreList, headerDispather]);

  return (
    <>
      <div className={styles.headerMenu}>
        <div className="content">
          <ul className={`${styles.headerMainMenu} ${styles.logo}`}>
            {headerMenu.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.headerCategory}>
        <div className="content">
          <div className={styles.categoryType}>
            <h1>영화</h1>
            <select>
              <option>장르</option>
              {genreList.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
