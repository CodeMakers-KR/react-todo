import { useEffect, useRef, useState } from "react";
import { useLoadArticles } from "../../hooks/article";
import WriteArticle from "./WriteArticle";
import Article from "./Article";
import { isAuthority } from "../../utils/resource";

export default function ArticleList() {
  const [view, setView] = useState("list");
  const [refresh, setRefresh] = useState(Math.random());
  const [nowPage, setNowPage] = useState(0);
  const [articleId, setArticleId] = useState();

  const viewList = () => {
    setView("list");
    setRefresh(Math.random());
    setNowPage(0);
  };
  const viewWrite = () => {
    setView("write");
  };
  const viewItem = (articleId) => {
    setView("item");
    setArticleId(articleId);
  };

  const observerRef = useRef();

  const { articles, nowLoading, errors } = useLoadArticles(
    {},
    nowPage,
    refresh
  );
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
      {isAuthority("BOARD_CREATE") && (
        <button type="button" onClick={viewWrite}>
          글 작성하기
        </button>
      )}
      <button type="button" onClick={viewList}>
        리스트 보기
      </button>
      {view === "list" ? (
        <>
          {!errors && (
            <>
              <div>{count} 개의 게시글이 검색되었습니다.</div>
              <ul>
                {data?.map((item) => (
                  <li key={item.id} onClick={viewItem.bind(this, item.id)}>
                    {item.subject}
                  </li>
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
      ) : view === "write" ? (
        <WriteArticle onSuccess={viewList} />
      ) : (
        <Article id={articleId} />
      )}
    </div>
  );
}
