import { useEffect, useRef, useState } from "react";
import { useLoadArticles } from "../../hooks/article";
import { isAuthority } from "../../utils/resource";
import { useSelector } from "react-redux";

export default function ArticleList() {
  const myInfo = useSelector((store) => store.userInfo);

  const [nowPage, setNowPage] = useState(0);

  const observerRef = useRef();

  const { articles, nowLoading, errors } = useLoadArticles({}, nowPage);
  const { count, data, hasMore, page } = articles;

  const handleObserver = (entries) => {
    if (entries[0].isIntersecting && hasMore) {
      setNowPage((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0,
    });
    const observerTarget = observerRef.current;

    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, [page]);

  return (
    <div>
      {isAuthority("BOARD_CREATE", myInfo) && (
        <button type="button">글 작성하기</button>
      )}
      <button type="button">리스트 보기</button>
      <>
        {!errors && (
          <>
            <div>{count} 개의 게시글이 검색되었습니다.</div>
            <ul>
              {data?.map((item) => (
                <li key={item.id}>{item.subject}</li>
              ))}
            </ul>

            {/* 아래 div가 브라우저에 노출이 되면 다음 페이지의 게시글을 로드한다. */}
            {!nowLoading && hasMore && (
              <div ref={observerRef}>다음 게시글 로드하기</div>
            )}
          </>
        )}
        {nowLoading && <div>게시글을 불러오는 중입니다.</div>}
        {errors && <div>{errors.error.authorization}</div>}
      </>
    </div>
  );
}
