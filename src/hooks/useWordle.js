import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState(["hallo", "again"]);
  const [isCorrect, setIsCorrect] = useState(false);

  //    format a guess into an array of letter objects
  const formatGuess = () => {
    console.log("formatiing", currentGuess);
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = () => {};

  // handle keyup
  const handelKeyup = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) return;
      if (history.includes(currentGuess)) return;
      if (currentGuess.length !== 5) return;

      formatGuess();
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handelKeyup };
};

export default useWordle;
