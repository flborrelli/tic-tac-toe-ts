import React, { useState, useEffect } from "react";
import "./Board.css";

const Board: React.FC = () => {

  //tipando variável como array de strings
  const emptyBoard: Array<string> = Array(9).fill("");
  //tipando estado board como array de strings
  const [board, setBoard] = useState<Array<string>>(emptyBoard);
  

  const handleBoardClick = (index: number) => {
    //Verify if the player click on a fulfilled board field
    if (board[index] !== "") {
      return null;
    }
    setBoard(
      board.map((element, elementIndex) => elementIndex === index ? 'X' : element));
  }

  return (
    <div className="container">
      <div className="game">
        <div className="board-grid">
          {board.map((element, index) => <button className={`btn ${element}`} key={index} onClick={() => handleBoardClick(index)}>{element}</button>)}
        </div>
      </div>
    </div>
  );
}

export default Board;
