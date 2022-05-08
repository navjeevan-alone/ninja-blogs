import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch";
function Update({ time }) {
  let { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("jim");
  useEffect(() => {
    setTitle(blog.title);
    setBody(blog.body);
    setAuthor(blog.author);
  }, [isPending]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, timestamp: time };
    // console.log(blog);
    // custom hook parameters : url,method,headers,body
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then((res) => {
      navigate("/");
    });
  };

  return (
    <div className="home">
      {error && <h2 className="loading">{error}</h2>}
      {isPending && (
        <h2 className="loading">
          {" "}
          <span className="loader"></span> Loading...
        </h2>
      )}
      {blog && (
        <div className="edit card container">
          <h2 className="blog-section-title">Edit Blog</h2>
          <form className="create-blog" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>

              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>

              <textarea
                name="body"
                id="body"
                cols="30"
                rows="10"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="author-select">Author</label>

              <select
                className="text-capitalize"
                name="author"
                id="author-select"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}>
                <option value="jim">jim</option>
                <option value="diana">diana</option>
              </select>
            </div>
            <div className="btn-group ">
              <button type="submit" className="btn btn-primary icon-btn">
                <span className="material-icons">update</span>
                <p>Update</p>
              </button>

              <button
                type="reset"
                onClick={() => {
                  setTitle("");
                  setBody("");
                  setAuthor("jim");
                }}
                className="btn btn-outline-primary icon-btn">
                <span className="material-icons">clear</span>
                <p>Reset</p>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Update;
