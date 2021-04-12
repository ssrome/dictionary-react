import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function hanndleKeyword(event) {
    setKeyword(event.target.value);
  }

  useEffect(() => {}, [keyword]);

  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios.get(url).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search} className="searchForm">
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

      <Results results={results} />
    </div>
  );
}
