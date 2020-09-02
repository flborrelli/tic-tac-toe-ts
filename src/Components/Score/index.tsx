import React from 'react';
import './styles.css';
import { Interface } from 'readline';

interface Scores {
  score: {
    scoreO: number,
    scoreX: number
  };
  playerO: string;
  playerX: string;
}

const Score: React.FC<Scores> = ({playerO, playerX, score}) => {
  const { scoreO, scoreX } = score;
  return (
    <div className="score-container">
        <div className='score scoreO'>
          <span>{playerO}</span>
          <div>{scoreO}</div>
        </div>
        <p>X</p>
        <div className='score scoreX'>
          <span>{playerX}</span>
          <div>{scoreX}</div>
        </div>
        </div>
  );
}

export default Score;