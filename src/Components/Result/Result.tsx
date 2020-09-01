import React from "react";
import "./Result.css";

interface Props {
  winner: string;
  playerName: string;
}

const Result: React.FC<Props> = ({winner, playerName}) => {
  

  return (
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
            {playerName} venceu{" "}
            <span role="img" aria-label="throphy">
              🏆
            </span>
          </h2>
        )}
      </footer>
    )
};

export default Result;
