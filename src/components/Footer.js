import React from "react";
// import { Link } from "react-router-dom";
function Footer() {
  return (
    <nav className="footer">
      <div className="container">
        <h2 className="text-primary">Ninja Blogs</h2>
        <p>
          Created by <strong className="text-primary">Navjeevan Alone</strong>
        </p>
        <p> View Me on</p>
        <div className="social-links">
          <a
            className="fa-brands fa-github"
            href="https://github.com/navjeevan-alone/CompleteReactBasics"
            target="_blank"></a>

          <a
            className="fa-brands fa-codepen"
            href="CodeSandbox"
            target="_blank"></a>
        </div>
        <p>
          <span className="material-icons copyright">copyright</span>{" "}
          <span>2022 All Rights Reserved.</span>
        </p>
      </div>
    </nav>
  );
}

export default Footer;
