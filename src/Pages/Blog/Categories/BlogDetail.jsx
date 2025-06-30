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
import RSecond from "./Riders/RSecond";
import RThird from "./Riders/RThird";
import VFirst from "./Vendores/VFirst";
import VThird from "./Vendores/VThird";
import VSecond from "./Vendores/VSecond";
import PFirst from "./Product/PFirst";
import MFirst from "./Marketing/MFirst";
import MSecond from "./Marketing/MSecond";
import MThird from "./Marketing/MThird";
import PartFirst from "./Partnerships/PartFirst";
import PartSecond from "./Partnerships/PartSecond";
import PartThird from "./Partnerships/PartThird";
import TryFirst from "./Try Outs/TryFirst";
import TrySecond from "./Try Outs/TrySecond";
import TryThird from "./Try Outs/TryThird";
import GFirst from "./GetIt/GFirst";

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
      if (blogId === 13) return <RSecond />;
      if (blogId === 14) return <RThird />;
    }

    if (category === "Vendores") {
      if (blogId === 15) return <VFirst />;
      if (blogId === 16) return <VSecond />;
      if (blogId === 17) return <VThird />;
    }

    if (category === "Product") {
      if (blogId === 18) return <PFirst />;
    }

    if (category === "Marketing") {
      if (blogId === 19) return <MFirst />;
      if (blogId === 20) return <MSecond />;
      if (blogId === 21) return <MThird />;
    }

    if (category === "Partnerships") {
      if (blogId === 22) return <PartFirst />;
      if (blogId === 23) return <PartSecond />;
      if (blogId === 24) return <PartThird />;
    }

    if (category === "Try outs") {
      if (blogId === 25) return <TryFirst />;
      if (blogId === 26) return <TrySecond />;
      if (blogId === 27) return <TryThird />;
    }

    if (category === "Get It Here") {
      if (blogId === 28) return <GFirst />;
    }

    return <div>Blog not found</div>;
  };

  return <div key={id}>{renderContent()}</div>;
};

export default BlogDetail;
