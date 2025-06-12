import React, { useEffect, useState } from "react";
import drink from "../../../assets/images/drinks.png";
import mobile from "../../../assets/images/mobile.png";
import pastry from "../../../assets/svg/pastry.svg";
import PageCategory from "./PageCategory";

const Categories = () => {
  const data = [
    {
      image: mobile,
    },
    {
      image: drink,
    },
    { image: pastry },
  ];
  const [postsPerPage] = useState(1);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber <= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const onLoad = () => {
    setPosts(data);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div>
      <div>
        <div className="bg-[#FFC501] rounded-lg ">
          <h2 className="font-extrabold lg:text-[71px] text-[45px] text-black text-center pt-[51px]">
            Explore categories
          </h2>
          {currentPosts.map((post, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={post.image}
                alt="drnk"
                className=" pt-[37px] 
              md:w-[249px] md:h-[560px]
              sm:w-[240px] sm:h-[440px]
              w-[224px] h-[382px]
              "
              />
            </div>
          ))}

          {/* <div className="sm:flex justify-between items-center sm:pt-0 pt-10 pb-[32px]">
            <div className="flex items-center gap-2 sm:pl-[32px] pl-[5px]">
              <div className="bg-black rounded-full">
                <img
                  src={location}
                  alt="lcn"
                  className="sm:p-[16.5px] p-[15px]"
                />
                disabled={currentPage === 1}
                disabled={currentPage === totalPage}
              </div> */}
          <div>
            <PageCategory
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPosts={posts.length}
              postsPerPage={postsPerPage}
              handlePageChange={handlePageChange}
            />
          </div>
          {/* <div className="bg-black rounded-full text-[16px] font-medium text-[#FFC501]">
                <button className="sm:p-[18px] p-[15px]">01</button>
              </div>
              <div className="border-black border-4 rounded-full text-[16px] text-black font-medium">
                <button className="sm:p-[18px] p-[15px]">02</button>
              </div>
              <div className="bg-black rounded-full text-[16px] font-medium text-[#FFC501]">
                <button className="sm:p-[18px] p-[15px]">03</button>
              </div> */}
          {/* <div className="bg-black rounded-full">
                <img src={ystar} alt="star" className="sm:p-[10.5px] p-[8px]" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
