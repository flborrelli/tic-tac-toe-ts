import React from "react";
import "./Status.css";

interface Props {
  currentPlayer: string;
  winner: string | null;
}

const Status: React.FC<Props> = ({currentPlayer, winner}) => {
  

  return (
    <>
    {winner ? (
      <div className={`jogador-da-vez ${currentPlayer}`}>Jogo Finalizado</div>
    ) : (
      <div className={`jogador-da-vez ${currentPlayer}`}>
        Jogador {currentPlayer} sua vez!
      </div>
    )}
    </>
    )
};

export default Status;
