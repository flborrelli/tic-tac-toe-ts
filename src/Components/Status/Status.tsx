import React from "react";
import "./Status.css";

interface Props {
  winner: string;
}

const Status: React.FC<Props> = ({winner}) => {
  

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
            {winner} venceu{" "}
            <span role="img" aria-label="throphy">
              🏆
            </span>
          </h2>
        )}
      </footer>
    )
};

export default Status;
