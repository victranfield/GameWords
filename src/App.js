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
  //board state defined in App.js using context api
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
