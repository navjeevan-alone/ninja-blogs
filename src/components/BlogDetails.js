import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Tags from "./Tags";

import useFetch from "./useFetch";
function BlogDetails() {
  document.title = `Ninja Blogs | View Blogs`;
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  let navigate = useNavigate();
  const handleDelete = (id) => {
    let confirmDelete = window.confirm("Are you sure to delete");
    if (confirmDelete) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      }).then((res) => {
        navigate("/");
      });
    } else return;
  };
  const handleUpdate = (id) => {
    console.log("update blog");
  };
  return (
    <div className="card container">
      {error && <h2 className="loading">{error}</h2>}
      {isPending && <Loading />}
      {!isPending && (
        <div className="blog-full" key={blog.id}>
          <h1 className="blog-section-title text-primary">{blog.title}</h1>
          <p className="blog-body">{blog.body}</p>
          <p className="blog-author">Written by {blog.author}</p>
          <Tags tags={blog.tags} />

          <div className="btn-group">
            <Link to={`/blog/edit/${id}`}>
              <button
                className="btn btn-primary icon-btn"
                onClick={() => handleUpdate(blog.id)}>
                <span className="material-icons">edit</span>
                <p>Edit</p>
              </button>
            </Link>

            <button
              className="btn btn-outline-primary icon-btn"
              onClick={() => handleDelete(blog.id)}>
              <span className="material-icons">delete</span>
              <p>Delete</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
