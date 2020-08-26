import React, { useState, useEffect } from "react";
import "./Board.css";

const Board: React.FC = () => {

  //tipando variável como array de strings
  const emptyBoard: Array<string> = Array(9).fill("");
  //tipando estado board como array de strings
  const [board, setBoard] = useState<Array<string>>(emptyBoard);


  return (
    <div className="container">
      <div className="game">
        <div className="board-grid">
          <button className="btn">X</button>
          <button className="btn">X</button>
          <button className="btn">X</button>
          <button className="btn">X</button>
          <button className="btn">X</button>
          <button className="btn">X</button>
          <button className="btn">X</button>
          <button className="btn">X</button>
          <button className="btn">X</button>
        </div>
      </div>
    </div>
  );
}

export default Board;
