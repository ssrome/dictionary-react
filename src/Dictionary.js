import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function photoSearch() {
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3&orientation=square`;
    let pexelsApiKey =
      "563492ad6f917000010000012c04f081c25e4b6f8858792ddeb8bdff";
    axios({
      method: "get",
      url: pexelsApiUrl,
      headers: { Authorization: pexelsApiKey },
    }).then(handlePexelsResponse);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios
      .get(url)
      .then(handleResponse)
      .then(photoSearch)
      .catch(function (error) {
        alert("Please search for a different word");
      });
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

        <Results results={results} photos={photos} keyword={keyword} />
      </div>
    );
  } else {
    load();
    return <div>loading...</div>;
  }
}
