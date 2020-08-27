import React from "react";
import "./Reset.css";

interface Props {
  emptyBoard: string[];
  setBoard: React.Dispatch<React.SetStateAction<string[]>>;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
}

const Reset: React.FC<Props> = ({
  setCurrentPlayer,
  setBoard,
  setWinner,
  emptyBoard,
}) => {
  function resetGame() {
    setCurrentPlayer("O");
    setBoard(emptyBoard);
    setWinner(null);
  }

  return (
    <div className="reset-container">
      <button onClick={resetGame}>Restart</button>
    </div>
  );
};

export default Reset;
