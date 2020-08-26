import React, { useState, useEffect } from "react";
import "./Board.css";

function Board() {
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
