import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function hanndleKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={hanndleKeyword}
        />
        <br />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}
