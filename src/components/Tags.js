import React from "react";

function Tags({ tags }) {
  return (
    <>
      <h3 className="mt-2">Tags</h3>
      <ul className="tags">
        {tags.map((tag) => {
          return <li className="tag-item">{tag}</li>;
        })}
      </ul>
    </>
  );
}

export default Tags;
