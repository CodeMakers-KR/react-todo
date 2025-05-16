import { useLoadArticles } from "../../hooks/article";

export default function ArticleList() {
  const { articles, nowLoading, errors } = useLoadArticles({});
  console.log(articles.count);
  console.log(articles.data);
  console.log(articles.hasMore);
  console.log(articles.listSize);
  console.log(articles.pageCount);

  return (
    <div>
      {nowLoading && <div>게시글을 불러오는 중입니다.</div>}
      {errors && <div>{errors.error.authorization}</div>}
    </div>
  );
}
