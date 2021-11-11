import { useQuery } from "react-query";
import ArticleCollection from "../components/ArticleCollection";

export default function Home() {
  const {
    isLoading,
    error,
    data: articles,
  } = useQuery("articles", () =>
    fetch("https://dev.to/api/articles").then((res) => res.json())
  );

  if (isLoading) return "Loading";
  if (error) return error.message;
  return (
    <>
      <div className="max-w-4xl mx-auto mt-4">
        <ArticleCollection collection={articles} />
      </div>
    </>
  );
}
