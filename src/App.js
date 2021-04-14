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
          Results from{" "}
          <a href="https://dictionaryapi.dev/" target="_blank" rel="noreferrer">
            https://dictionaryapi.dev
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
