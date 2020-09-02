import React, { useState, useEffect } from "react";
import "./styles.css";
import Reset from "../Reset";
import Result from "../Result";
import Status from "../Status";
import Button from '../Button';

interface Players {
  players: {
    playerO: string,
    playerX: string,
  };
}

const Board: React.FC<Players> = ({players}) => {
  const {playerO, playerX} = players;
  const emptyBoard = Array<string>(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [playerName, setPlayerName] = useState(playerO);
  const [winner, setWinner] = useState<string | null>(null);

  const handleBoardClick = (index: number) => {
    //Check if the game finished 
    if (winner) {
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
    setPlayerName(currentPlayer === "X" ? playerO : playerX)
  }

  const checkWinner = () => {
    const winningPossibilities = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    const winnerO = ["O", "O", "O"];
    const winnerX = ["X", "X", "X"];

    winningPossibilities.forEach((possibility) => {
      if (possibility.toString() === winnerO.toString()) {
        setWinner("O");
        setPlayerName(playerO)
      }
      if (possibility.toString() === winnerX.toString()) {
        setWinner("X");
        setPlayerName(playerX)
      }
    });
  }

  (() => {
    if (board.every((element) => element !== "") && winner === null) {
      setWinner("E");
    }
  })()

  useEffect(checkWinner, [board]);

  return (
    <>
      <div className="status-container">
      {winner ? <Result winner={winner} playerName={playerName} /> : <Status currentPlayer={currentPlayer} playerName={playerName} winner={winner} />}
      </div>
      <div className="container">
        <div className='game-space'>
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
        </div>

        <div className="btns-container">
          <Button/>
          <Reset
            emptyBoard={emptyBoard}
            setCurrentPlayer={setCurrentPlayer}
            setBoard={setBoard}
            setWinner={setWinner}
            setPlayerName={setPlayerName}
            playerO={playerO}
          />
        </div>
      </div>
    </>
  );
};

export default Board;
