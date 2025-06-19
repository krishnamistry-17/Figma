import React from "react";
import BlogBg from "./Bg/BlogBg";
import Categories from "./Categories/Categories";
import Press from "./Press/Press";
import BlogPlace from "./BlogPlace/BlogPlace";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <div>
      <div>
        <BlogBg />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <Press />
      </div>
      <div>
        <BlogPlace />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
