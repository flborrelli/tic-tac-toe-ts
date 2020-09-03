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
          <p>{playerO}</p>
          <span>{scoreO}</span>
        </div>
        <div id='vs'>X</div>
        <div className='score scoreX'>
          <span>{scoreX}</span>
          <p>{playerX}</p>
        </div>
        </div>
  );
}

export default Score;