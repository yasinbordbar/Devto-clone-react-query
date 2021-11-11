import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import Article from "../../components/Article";

export default function ArticleId({ ArticleId }) {
  const {
    isLoading,
    error,
    data: article,
  } = useQuery("article", () =>
    fetch(`https://dev.to/api/articles/${ArticleId}`).then((res) => res.json())
  );
  if (isLoading) return "Loading";
  if (error) return "Error";

  return (
    <>
      <Link passHref href="/">
        <div className="text-center">
          <button className="p-3 font-bold text-sm bg-gray-300 items-center my-4">
            back to home page
          </button>
        </div>
      </Link>
      <div className="max-w-4xl mx-auto">
        <Article article={article} />
      </div>
    </>
  );
}

ArticleId.getInitialProps = async ({ query }) => {
  const { ArticleId } = query;
  return { ArticleId };
};
