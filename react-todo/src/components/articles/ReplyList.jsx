import { useLoadReplies } from "../../hooks/article";
import { isAuthority, isOwner } from "../../utils/resource";

export default function ReplyList({ id }) {
  const { replies, nowLoading, errors } = useLoadReplies([], id);
  console.log(replies);

  return (
    <>
      {nowLoading && "댓글을 불러오는 중입니다. 잠시만 기다려주세요."}
      {!nowLoading && (
        <ul>
          {replies.map((item) => (
            <li key={item.replyId}>
              <div>
                <div>
                  {item.email} {item.memberVO.name}
                </div>
                <div>{item.content}</div>
                <div>
                  {isOwner(item.email) && isAuthority("REPLY_UPDATE") && (
                    <button type="button">수정</button>
                  )}
                  {isOwner(item.email) && isAuthority("REPLY_DELETE") && (
                    <button type="button">삭제</button>
                  )}
                  {!isOwner(item.email) && isAuthority("REPLY_RECOMMEND") && (
                    <button type="button">추천</button>
                  )}
                  {isAuthority("REPLY_CREATE") && (
                    <button type="button">답글달기</button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
