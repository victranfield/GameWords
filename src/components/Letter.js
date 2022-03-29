import React, { useContext } from "react";
import { AppContext } from "../App";

//two different props - letter position, attempt value

function Letter({ letterPos, attemptVal }) {
  const { board, correctWord, currAttempt } = useContext(AppContext);
  //object calls board
  const letter = board[attemptVal][letterPos];
  //access each letter individually
  const correct = correctWord[letterPos] === letter;
  //check if word position is equal to letter in cell

  const almost = !correct && letter !== "" && correctWord.includes(letter);
  //correctWord must have one letter at least if almost
  //can't be empty
  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");
  //if correct is true, set letterState to correct
  //if not check if almost is true
  //if neither, then an error

  return (
    <div className="letter" id={letterState}>
      {" "}
      {letter}{" "}
    </div>
  );
  //determine colour of letter/cell, correct positioning or incorrect, not in word
}

export default Letter;
