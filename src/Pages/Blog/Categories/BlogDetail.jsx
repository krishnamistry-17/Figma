import { useParams } from "react-router-dom";
import First from "./All/First";
import Second from "./All/Second";
import Third from "./All/Third";
const BlogDetail = () => {
  const { category, id } = useParams();
  const blogId = parseInt(id);

  const renderContent = () => {
    if (category === "all") {
      if (blogId === 0) return <First />;
      if (blogId === 1) return <Second />;
      if (blogId === 2) return <Third />;
    }

    if (category === "news") {
      return <div>News blog with ID {blogId}</div>;
    }

    return <div>Blog not found</div>;
  };

  return <div className="">{renderContent()}</div>;
};

export default BlogDetail;
