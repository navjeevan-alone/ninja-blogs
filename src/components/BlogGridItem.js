import React from "react";
import { Link } from "react-router-dom";
function BlogGridItem({ blog }) {
  return (
    <li className="blog-card shadow-2 " key={blog.id}>
      <h3 className="blog-title">{blog.title.substr(0, 24)}</h3>
      <p className="blog-body">
        {blog.body.substr(0, 50)}...{" "}
        <Link className="read-more" to={`/blog/${blog.id}`}>
          Read More
        </Link>
      </p>
      <p className="blog-author">
        Written by <strong className="text-capitalize"> {blog.author}</strong>
      </p>
    </li>
  );
}

export default BlogGridItem;
