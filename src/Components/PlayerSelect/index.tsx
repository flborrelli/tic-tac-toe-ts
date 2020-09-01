import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Board from '../Board/Board';

const PlayerSelect: React.FC = () => {

  const [players, setPlayers] = useState({
    playerO: 'O',
    playerX: 'X',
  });

  const [startGame, setStartGame] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlayers({...players, [name]: value})
  }

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    setStartGame(true)
  }
  console.log(startGame)
  return (

    <div className="game-container">
      <div className='header'>
        <h1> J<span role='img' aria-label='O'>⭕</span>go da Velh<span role='img' aria-label='x'>❌</span> </h1>
      </div>
      {
        startGame ? <Board players={players}/> : (
<div className="player-select-container">
        <h2>Escolha de Jogadores</h2>
        <form>
          <label htmlFor="playerO">Jogador O: </label>
          <input type="text" name='playerO' id='playerO' onChange={handleInputChange}/>
  
          <label htmlFor="playerX">Jogador X: </label>
          <input type="text" name='playerX' id='playerX' onChange={handleInputChange}/>
        </form>
  
        <button onClick={handleClick}>Jogar</button>
        
      </div>
        ) 
        
      }
      
    </div>
    
  );
}

export default PlayerSelect;
