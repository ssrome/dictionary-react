import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function load() {
    setLoaded(true);

    search();
  }

  useEffect(() => {}, [keyword]);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <span className="question">What word do you want to look up?</span>
          <form onSubmit={handleSubmit} className="searchForm">
            <input
              type="search"
              aria-label="search input"
              placeholder="Search for a word"
              defaultValue={props.defaultKeyword}
              onChange={handleKeyword}
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return <div>loading...</div>;
  }
}
