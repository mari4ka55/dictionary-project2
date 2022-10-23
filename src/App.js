import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a
            href="https://www.linkedin.com/in/maria-lobur-4150b2164/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} className="logo" alt="Logo" />
          </a>
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/maria-lobur-4150b2164/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mariia Lobur
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mari4ka55/Dictionary-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://dictionary.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
