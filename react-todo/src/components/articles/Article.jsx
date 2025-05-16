import { useLoadArticle } from "../../hooks/article";
import { isAuthority, isOwner } from "../../utils/resource";
import ReplyList from "./ReplyList";

export default function Article({ id }) {
  const { article, nowLoading } = useLoadArticle({}, id);

  if (!isAuthority("BOARD_READ")) {
    return <div>권한이 없습니다.</div>;
  }

  console.log(article);
  return (
    <div>
      {nowLoading && "게시글을 조회중입니다. 잠시만 기다려주세요."}
      {!nowLoading && (
        <>
          <h1>{article.subject}</h1>
          <h3>{article.email}</h3>
          <h3>{article.memberVO.name}</h3>
          <h4>{article.crtDt}</h4>
          <h4>{article.viewCnt}</h4>
          <pre>{article.content}</pre>

          {isOwner(article.email) && isAuthority("BOARD_UPDATE") && (
            <button type="button">수정</button>
          )}

          {isOwner(article.email) && isAuthority("BOARD_DELETE") && (
            <button type="button">삭제</button>
          )}

          <hr />
          <h3>Replies</h3>
          <ReplyList id={id} />
        </>
      )}
    </div>
  );
}
