import React, { useEffect, useState } from "react";
import { BlogUser } from "../interface/Interface";
import "./Blogs.css";

function Blogs() {
  const [blogData, setBlogData] = useState<BlogUser[]>();
  const [textSearch, setTextSearch] = useState<string>();

  const [filterBlogData, setFilterBlogData] = useState<BlogUser[]>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setBlogData(data);
      });
  }, [filterBlogData]);

  const renderBlogs = () => {
    return blogData?.map((data: BlogUser, index: number) => {
      return (
        <div className="Blog-card" key={index}>
          <div className="Blog-header">
            <h3>{data.name}</h3>
            <h4>{data.email}</h4>
          </div>
          <div className="Blog-container">
            <h4>Address</h4>
            <p>
              {data.address.street},{data.address.suite},{data.address.city},
              {data.address.zipcode}
            </p>
            <h4>Company Name </h4>
            <p>{data.company.name}</p>
          </div>
        </div>
      );
    });
  };

  const renderFilteredBlogs =()=>{
    return filterBlogData?.map((data: BlogUser, index: number) => {
        return (
          <div className="Blog-card" key={index}>
            <div className="Blog-header">
              <h3>{data.name}</h3>
              <h4>{data.email}</h4>
            </div>
            <div className="Blog-container">
              <h4>Address</h4>
              <p>
                {data.address.street},{data.address.suite},{data.address.city},
                {data.address.zipcode}
              </p>
              <h4>Company Name </h4>
              <p>{data.company.name}</p>
            </div>
          </div>
        );
      });
  }

  const handleTextSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    //  if(event.target.value.length>=3){
      const data = blogData?.filter((data) => {
        return data.name.toLowerCase().includes(event.target.value.toLowerCase()) || 
          data.company.name.toLowerCase().includes(event.target.value.toLowerCase());
      });
  
      console.log(data);
      setFilterBlogData(data);
    // }
    
  };

  return (
    <div className="Blog-layout">
      <div className="Blog-flex">
        <div className="Blog">{renderBlogs()}</div>
      </div>
      <div className="Blog-flex">
        <div>
          <input
            type="search"
            name="textSearch"
            value={textSearch}
            onChange={handleTextSearch}
            placeholder="Search by Name/Company Name"
          />
        </div>
        <div className="Blog">{renderFilteredBlogs()}</div>
      </div>
    </div>
  );
}

export default Blogs;
