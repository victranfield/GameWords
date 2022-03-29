import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useState } from "react";
import { boardDefault } from "./Words";

export const AppContext = createContext();
//need access to this from all components
//need access inside component
//access board state from board and keyboard
//so use appcontext provider

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  //board state defined in App.js using context api
  const correctWord = "RIGHT";

  //declare functions in app.js instead
  const onEnter = () => {
    //check if letters in current attempt is 5
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    //moving upwards
    //atempt goes up, letter pos goes to 0
    //can't press enter before 5 letters
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
    //going backwards, setting previous position to empty
  };

  const onSelectLetter = (keyVal) => {
    //pass keyVal as a prop to give access
    if (currAttempt.letterPos > 4) return;
    //if greater than 4, don't continue with function - 5 is max to enter
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    //newBoard position - will be equal to whichever keyvalue in key, currently being used
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onEnter,
          onDelete,
          onSelectLetter,
          correctWord,
        }}
        //pass all functions in context provider to give access
        //can now access anywhere in project
      >
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
