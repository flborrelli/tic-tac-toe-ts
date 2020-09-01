import React from "react";
import "./Status.css";

interface Props {
  currentPlayer: string;
  winner: string | null;
  playerName: string;
}

const Status: React.FC<Props> = ({currentPlayer, winner, playerName}) => {
  

  return (
    <>
    {winner ? (
      <div className={`jogador-da-vez ${currentPlayer}`}>Jogo Finalizado</div>
    ) : (
      <div className={`jogador-da-vez ${currentPlayer}`}>
        {playerName} sua vez!
      </div>
    )}
    </>
    )
};

export default Status;
