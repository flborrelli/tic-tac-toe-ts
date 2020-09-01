import React, { useState, ChangeEvent, MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Board from "../Board/Board";

const PlayerSelect: React.FC = () => {
  const [players, setPlayers] = useState({
    playerO: "O",
    playerX: "X",
  });

  const [startGame, setStartGame] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlayers({ ...players, [name]: value });
  };

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    setStartGame(true);
  };
  console.log(startGame);
  return (
    <div className="game-container">
      <div className="header">
        <h1>
          {" "}
          J
          <span role="img" aria-label="O">
            ⭕
          </span>
          go da Velh
          <span role="img" aria-label="x">
            ❌
          </span>{" "}
        </h1>
      </div>
      {startGame ? (
        <Board players={players} />
      ) : (
        <div className="player-select-container">
          <h2>Escolha de Jogadores</h2>
          <form>
            <div>
              <label htmlFor="playerO">
                Jogador{" "}
                <span role="img" aria-label="O">
                  ⭕
                </span>
                :{" "}
              </label>
              <input
                type="text"
                name="playerO"
                id="playerO"
                onChange={handleInputChange}
              />
            </div>
            <span>VS.</span>
            <div>
              <label htmlFor="playerX">
                Jogador{" "}
                <span role="img" aria-label="x">
                  ❌
                </span>
                :{" "}
              </label>
              <input
                type="text"
                name="playerX"
                id="playerX"
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button onClick={handleClick}>Jogar</button>
        </div>
      )}
    </div>
  );
};

export default PlayerSelect;
