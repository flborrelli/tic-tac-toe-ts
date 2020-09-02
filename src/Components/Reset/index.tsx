import React from "react";
import "./styles.css";

interface Props {
  emptyBoard: string[];
  setBoard: React.Dispatch<React.SetStateAction<string[]>>;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
  setPlayerName: React.Dispatch<React.SetStateAction<string>>;
  playerO: string;
}

const Reset: React.FC<Props> = ({
  setCurrentPlayer,
  setBoard,
  setWinner,
  emptyBoard,
  setPlayerName,
  playerO,
}) => {
  function resetGame() {
    setCurrentPlayer("O");
    setPlayerName(playerO)
    setBoard(emptyBoard);
    setWinner(null);
  }

  return (
    <div className="reset-container">
      <button className='btns' onClick={resetGame}>Recomeçar</button>
    </div>
  );
};

export default Reset;
