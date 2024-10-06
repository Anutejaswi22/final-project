import { useState } from "react";
import axios from "axios";

function SearchVerseButton() {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verseNumber, setVerseNumber] = useState("");
  const [verse, setVerse] = useState("Enter a book, chapter, and verse to search!");

  const fetchSpecificVerse = async (event) => {
    event.preventDefault();
    if (!book || !chapter || !verseNumber) {
      setVerse("Please fill out all fields.");
      return;
    }

    const passage = `${book}+${chapter}:${verseNumber}`;
    try {
      const response = await axios.get(
        `https://labs.bible.org/api/?passage=${passage}&formatting=plain&type=text`
      );
      setVerse(response.data);
    } catch (error) {
      console.error("Error fetching specific verse", error);
      setVerse("Sorry, something went wrong.");
    }
  };

  return (
    <div>
      <form onSubmit={fetchSpecificVerse}>
        <input
          type="text"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          placeholder="Book (e.g. John)"
          required
        />
        <input
          type="number"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          placeholder="Chapter"
          required
        />
        <input
          type="number"
          value={verseNumber}
          onChange={(e) => setVerseNumber(e.target.value)}
          placeholder="Verse"
          required
        />
        <button type="submit">Get Verse</button>
      </form>
      <h2>{verse}</h2>
    </div>
  );
}

export default SearchVerseButton;