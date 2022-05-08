import React from "react";
import { Link } from "react-router-dom";
function BlogListItem({ blog }) {
  return (
    <li className="blog-preview" key={blog.id}>
      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-body">
        {blog.body.substr(0, 150)}...{" "}
        <Link
          className="read-more text-bold text-secondary"
          to={`/blog/${blog.id}`}>
          Read More
        </Link>
      </p>

      <div className="d-flex justify-self-between">
        <p className="blog-author">
          Written by <strong className="text-capitalize"> {blog.author}</strong>
        </p>
        <p className="blog-author">
          <span className="material-icons icon-inline mx-1">history</span>
          {blog.timestamp}
        </p>
      </div>
    </li>
  );
}

export default BlogListItem;
