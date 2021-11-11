import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Article = ({ article }) => {
  return (
    <div>
      <img src={article.cover_image} alt={article.title} />
      <p className="font-bold text-2xl p-4">{article.title}</p>
      <p className="text-md p-4">
        {" "}
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.body_markdown}
        </ReactMarkdown>
      </p>
    </div>
  );
};

export default Article;
