import Link from "next/link";
import { uuid } from "uuidv4";

const ArticleCollection = ({ collection }) => {
  return (
    <div className="bg-white shadow rounded cursor-pointer">
      <ul className="divide-y divide-gray-200">
        {collection?.map((article) => (
          <li key={article.id} className="block hover:bg-gray-100">
            <Link passHref href={"articles/" + article.id}>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="text-lg text-blue-400">{article.title}</div>
                  <div className="ml-2">
                    {article.tag_list.map((tag) => (
                      <div
                        key={uuid()}
                        className="ml-1  inline-flex px-2 text-xs rounded-full bg-gray-100 text-black-300"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleCollection;
