import Article from "../components/articles/Article";
import ArticleList from "../components/articles/ArticleList";
import WriteArticle from "../components/articles/WriteArticle";

export const articleRouter = [
  {
    path: "view/:id", // http://localhost:3000/article/view/123
    element: <Article />,
  },
  {
    path: "list", // http://localhost:3000/article/list
    element: <ArticleList />,
  },
  {
    path: "write", // http://localhost:3000/article/write
    element: <WriteArticle />,
  },
];
