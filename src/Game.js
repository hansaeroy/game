import React from "react";
import "./Game.css";

function Game({
  total,
  name,
  id,
  price,
  atk,
  atkRound,
  tos,
  tosRound,
  dep,
  depRound,
}) {
  const imgUrl = process.env.PUBLIC_URL + `/assets/${id}.png`;
  const atkPoint = Math.floor(atk.toFixed(2) * 100);
  const tosPoint = Math.floor(tos.toFixed(2) * 100);
  const depPoint = Math.floor(dep.toFixed(2) * 100);
  const pricePoint = price / 10000;
  const totalPoint = Math.floor(total.toFixed(2) * 100);
  const gameRound = atkRound + tosRound + depRound;
  const gameCount = Math.max(atkRound, tosRound, depRound);

  let position;
  let positionPoint;
  if (gameRound === 0) {
    position = "NON";
    positionPoint = "0";
  } else if (gameCount === atkRound) {
    position = "ATT";
    positionPoint = atkPoint;
  } else if (gameCount === tosRound) {
    position = "TOS";
    positionPoint = tosPoint;
  } else if (gameCount === depRound) {
    position = "DEP";
    positionPoint = depPoint;
  }

  let iconClass;
  if (positionPoint >= 60 && gameRound >= 10) {
    iconClass = "game gold";
  } else if (positionPoint < 60 && positionPoint >= 40) {
    iconClass = " game silver";
  } else {
    iconClass = " game bronze";
  }

  return (
    <div className={iconClass}>
      <img src={imgUrl} alt={name} />
      <div className="game__data">
        <div className="game__total">{positionPoint}</div>
        <div className="game__position">{position}</div>
        <h4 className="game__name">{name}</h4>
        <div className="game__score">
          <p>
            ATT <span>{atkPoint}</span>
          </p>
          <p className="letter">
            GAME <span>{gameRound}</span>
          </p>
          <p>
            TOS <span>{tosPoint}</span>
          </p>
          <p>
            RATE <span>{totalPoint}</span>
          </p>
          <p>
            DEP <span>{depPoint}</span>
          </p>
          <p>
            COST <span id="letter">{pricePoint}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Game;
