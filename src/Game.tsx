import React from 'react';
import './Game.css';
import Board from './Components/Board/Board';

const Game: React.FC = () => {
  return (
    <div className="game-container">
      <div className='header'>
        <h1> J<span role='img' aria-label='O'>⭕</span>go da Velh<span role='img' aria-label='x'>❌</span> </h1>
      </div>
      <Board />
    </div>
  );
}

export default Game;
