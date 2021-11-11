import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import Article from "../../components/Article";

export default function articleId({ articleId }) {
  const {
    isLoading,
    error,
    data: article,
  } = useQuery("article", () =>
    fetch(`https://dev.to/api/articles/${articleId}`).then((res) => res.json())
  );
  if (isLoading) return "Loading";
  if (error) return error.message;

  return (
    <>
      <Link href="/">
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

articleId.getInitialProps = async ({ query }) => {
  const { articleId } = query;
  return { articleId };
};
