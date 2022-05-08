// import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogListItem from "./BlogListItem";
import BlogGridItem from "./BlogGridItem";
function BlogList({ blogs, title }) {
  // console.log(blogs);
  const [posts, setPosts] = useState(blogs);
  // console.log(posts);
  const [isGrid, setIsGrid] = useState(false);
  const [gridIcon, setGridIcon] = useState("apps");
  const [searchTerm, setSearchTerm] = useState("");

  const handleGridChange = () => {
    setIsGrid(!isGrid);
    isGrid ? setGridIcon("apps") : setGridIcon("menu");
    localStorage.setItem("isGrid", isGrid);
    setPosts(blogs);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // console.log(posts);
    if (searchTerm !== "") {
      let searchReults = posts.filter((item) => {
        let str = Object.values(item).join(" ").toLowerCase();
        return str.includes(searchTerm);
      });
      setPosts(searchReults);
    } else {
      setPosts(blogs);
    }
  };
  // toggle comp
  let comp = (
    <ul className="blog-list-container">
      {posts.map((blog) => {
        return <BlogListItem blog={blog} key={blog.id} />;
      })}
    </ul>
  );

  isGrid
    ? (comp = (
        <ul className="blog-grid-container">
          {posts.map((blog) => {
            return <BlogGridItem blog={blog} key={blog.id} />;
          })}
        </ul>
      ))
    : (comp = (
        <ul className="blog-list-container">
          {posts.map((blog) => {
            return <BlogListItem blog={blog} key={blog.id} />;
          })}
        </ul>
      ));

  return (
    <div className={`container card`}>
      <div className="blog-section-title d-flex justify-self-between ">
        <h2>{title}</h2>
        <div className="d-flex gap-1">
          <input
            type="text"
            className="inp"
            id="search-bar"
            name="seach-bar"
            placeholder="Seach blogs..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            className="icon-only-btn material-icons"
            onClick={handleGridChange}>
            {gridIcon}
          </button>
        </div>
      </div>
      {comp}
    </div>
  );
}

export default BlogList;
{
  /* {!isGrid &&
          blogs.map((blog) => {
            return (
              <li className="card blog-cards" key={blog.id}>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-body">
                  {blog.body.substr(0, 50)}...{" "}
                  <Link className="read-more" to={`/blog/${blog.id}`}>
                    Read More
                  </Link>
                </p>
                <p className="blog-author">
                  Written by {blog.author}{" "}
                  <button className="btn btn-primary btn-sm">Delete</button>
                </p>
              </li>
            );
          })} */
}
