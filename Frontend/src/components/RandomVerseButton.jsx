import { useState } from "react";
import axios from "axios";

function RandomVerseButton() {
  const [verse, setVerse] = useState("Click to get a random Bible verse!");

  const fetchRandomVerse = async () => {
    try {
      const response = await axios.get(
        "https://labs.bible.org/api/?passage=random&type=text&formatting=plain"
      );
      setVerse(response.data);
    } catch (error) {
      console.error("Error fetching random verse", error);
      setVerse("Sorry, something went wrong.");
    }
  };

  return (
    <div>
      <h2>{verse}</h2>
      <button onClick={fetchRandomVerse}>Get Random Verse</button>
    </div>
  );
}

export default RandomVerseButton;