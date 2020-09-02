import React, { useState, ChangeEvent, MouseEvent } from "react";
import "./styles.css";
import Board from "../Board";

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
    const {playerO, playerX} = players;
    if(playerO === 'O' || playerX === 'X'){
      window.alert('Por favor, insira o nome dos dois jogadores para começar o jogo.')
    } else {
    setStartGame(true);
    }
  };

  return (
    <div className="game-container">
      <div className="header">
        <h1>
          Jogo da Velha
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

          <button className='btns' onClick={handleClick}>Jogar</button>
        </div>
      )}
    </div>
  );
};

export default PlayerSelect;
