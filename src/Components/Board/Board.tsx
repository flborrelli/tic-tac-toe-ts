import React, { useState, useEffect } from "react";
import "./Board.css";
import Reset from "../Reset/Reset";

const Board: React.FC = () => {
  //tipando variável como array de strings
  const emptyBoard: string[] = Array(9).fill("");
  //tipando estado board como array de strings
  const [board, setBoard] = useState<Array<string>>(emptyBoard);
  //tipando estado currentPlayer como string
  const [currentPlayer, setCurrentPlayer] = useState<string>("O");
  //tipando estado currentPlayer como string
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(checkWinner, [board]);

  function handleBoardClick(index: number) {
    //Check if the game finished
    if (winner) {
      console.log("Jogo finalizado!");
      return null;
    }
    //Verify if the player click on a fulfilled board field
    if (board[index] !== "") {
      return null;
    }
    setBoard(
      board.map((element, elementIndex) =>
        elementIndex === index ? currentPlayer : element
      )
    );
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function checkWinner() {
    const winningPossibilities: string[][] = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    const winnerO: string[] = ["O", "O", "O"];
    const winnerX: string[] = ["X", "X", "X"];

    winningPossibilities.forEach((possibility) => {
      if (possibility.toString() === winnerO.toString()) {
        setWinner("O");
        console.log("O venceu!");
      }
      if (possibility.toString() === winnerX.toString()) {
        setWinner("X");
        console.log("X venceu!");
      }
    });
  }

  function checkDraw() {
    if (board.every((element) => element !== "") && winner === null) {
      console.log("E");
      setWinner("E");
    }
  }

  checkDraw();

  return (
    <>
      {winner ? (
        <div className={`jogador-da-vez ${currentPlayer}`}>Jogo Finalizado</div>
      ) : (
        <div className={`jogador-da-vez ${currentPlayer}`}>
          Jogador {currentPlayer} sua vez!
        </div>
      )}
      <div className="container">
        <div className="game">
          <div className="board-grid">
            {board.map((element, index) => (
              <button
                className={`btn ${element}`}
                key={index}
                onClick={() => handleBoardClick(index)}
              >
                {element}
              </button>
            ))}
          </div>
        </div>

        <div className="btns-container">
          <Reset
            emptyBoard={emptyBoard}
            setCurrentPlayer={setCurrentPlayer}
            setBoard={setBoard}
            setWinner={setWinner}
          />
          {winner && (
            <footer>
              {winner === "E" ? (
                <h2 className={winner}>
                  Empate{" "}
                  <span role="img" aria-label="worried-face">
                    😟
                  </span>
                </h2>
              ) : (
                <h2 className={winner}>
                  {winner} venceu{" "}
                  <span role="img" aria-label="throphy">
                    🏆
                  </span>
                </h2>
              )}
            </footer>
          )}
        </div>
      </div>
    </>
  );
};

export default Board;
