import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="error card container">
      <h2>404! Not Found</h2>
      <p>Go back to</p>
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
    </div>
  );
}

export default Error;
