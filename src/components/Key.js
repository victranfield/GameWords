import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);
  //grabbing setBoard function from the context, originally passed in App.js

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
      //needs keyVal as function argument
    }
  };
  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}
//id depends on big key or not
//key component accepts keyval prop

export default Key;
