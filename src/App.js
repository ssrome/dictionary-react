import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Dictionary</h1>
      </header>
      <div className="container">
        <Dictionary defaultKeyword="read" />
        <div className="credit">
          Dictionary results from{" "}
          <a href="https://dictionaryapi.dev/" target="_blank" rel="noreferrer">
            https://dictionaryapi.dev
          </a>{" "}
          and{" "}
          <a href="https://www.pexels.com" target="_blank" rel="noreferrer">
            Photos provided by Pexels
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
