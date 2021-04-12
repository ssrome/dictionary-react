import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function hanndleKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios.get(url).then(handleResponse);
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
      <div>
        Results from{" "}
        <a href="https://dictionaryapi.dev/" target="_blank" rel="noreferrer">
          https://dictionaryapi.dev
        </a>
      </div>
    </div>
  );
}
