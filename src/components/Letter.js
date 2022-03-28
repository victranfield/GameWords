import React, { useContext } from "react";
import { AppContext } from "../App";

//two different props - letter position, attempt value

function Letter({ letterPos, attemptVal }) {
  const { board } = useContext(AppContext);
  //object calls board
  const letter = board[attemptVal][letterPos];
  //access each letter individually

  return <div className="letter"> {letter} </div>;
}

export default Letter;
