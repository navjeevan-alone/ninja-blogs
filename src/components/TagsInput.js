import { useState } from "react";

function TagsInput() {
  const [tags, setTags] = useState(["navjeevan", "chetan"]);
  const [tagInput, setTagInput] = useState("");

  const addTags = () => {
    if (tagInput !== "" && tags.length <= 10) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  return (
    <>
      <div className="form-group container card">
        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          placeholder="Press Enter after each tag"
        />
      </div>

      <div className="form-group container card">
        <label>Your tags</label>
        {tags.length != 0 ? (
          <ul className="tags-list">
            {tags.map((tag, index) => {
              return (
                <li className="tag-item " key={index}>
                  <span className="tag-text">{tag}</span>
                  <span
                    className="material-icons tag-clear-btn"
                    onClick={() => removeTags(index)}>
                    clear
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p> No tags added yet</p>
        )}
      </div>
    </>
  );
}

export default TagsInput;
