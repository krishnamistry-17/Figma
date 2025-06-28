import { useParams } from "react-router-dom";
import First from "./All/First";
import Second from "./All/Second";
import Third from "./All/Third";
import Four from "./All/Four";
import Fifth from "./All/Fifth";
import Six from "./All/Six";
import { useEffect } from "react";
import NFirst from "./News/NFirst";
import NSecond from "./News/NSecond";
import NThird from "./News/NThird";
import NFour from "./News/NFour";
import NFive from "./News/NFive";
import NSix from "./News/NSix";
import RFirst from "./Riders/RFirst";

const BlogDetail = () => {
  const { category, id } = useParams();
  const blogId = parseInt(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const renderContent = () => {
    if (category === "all") {
      if (blogId === 0) return <First />;
      if (blogId === 1) return <Second />;
      if (blogId === 2) return <Third />;
      if (blogId === 3) return <Four />;
      if (blogId === 4) return <Fifth />;
      if (blogId === 5) return <Six />;
    }

    if (category === "news") {
      if (blogId === 6) return <NFirst />;
      if (blogId === 7) return <NSecond />;
      if (blogId === 8) return <NThird />;
      if (blogId === 9) return <NFour />;
      if (blogId === 10) return <NFive />;
      if (blogId === 11) return <NSix />;
    }

    if (category === "Rider") {
      if (blogId === 12) return <RFirst />;
    }

    return <div>Blog not found</div>;
  };

  return <div key={id}>{renderContent()}</div>;
};

export default BlogDetail;
