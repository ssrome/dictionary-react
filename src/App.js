import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <h2>What do you want to look up?</h2>
        <Dictionary />
        <div>
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
