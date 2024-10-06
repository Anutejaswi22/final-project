// src/App.jsx
import "./App.css";
import RandomVerseButton from "./components/RandomVerseButton";
import SearchVerseButton from "./components/SearchVerseButton";

function App() {
  return (
    <div className="App">
      <h1>Bible Verse Generator</h1>
      <RandomVerseButton />
      <SearchVerseButton />
    </div>
  );
}

export default App;