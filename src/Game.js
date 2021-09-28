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

  let position;
  if (atkRound + tosRound + depRound === 0) {
    position = "NON";
  } else if (Math.max(atkRound, tosRound, depRound) === atkRound) {
    position = "ATT";
  } else if (Math.max(atkRound, tosRound, depRound) === tosRound) {
    position = "TOS";
  } else if (Math.max(atkRound, tosRound, depRound) === depRound) {
    position = "DEP";
  }

  let iconClass;
  if (totalPoint >= 55 && atkRound + tosRound + depRound >= 10) {
    iconClass = "game gold";
  } else if (totalPoint < 55 && totalPoint >= 30) {
    iconClass = " game silver";
  } else {
    iconClass = " game bronze";
  }

  return (
    <div className={iconClass}>
      <img src={imgUrl} alt={name} />
      <div className="game__data">
        <div className="game__total">{totalPoint}</div>
        <div className="game__position">{position}</div>
        <h4 className="game__name">{name}</h4>
        <div className="game__atk">
          <p>
            ATT <span>{atkPoint}</span>
          </p>
          <p>
            GAME <span>{atkRound}</span>
          </p>
        </div>
        <div className="game__tos">
          <p>
            TOS <span>{tosPoint}</span>
          </p>
          <p>
            GAME <span>{tosRound}</span>
          </p>
        </div>
        <div className="game__dep">
          <p>
            DEP <span>{depPoint}</span>
          </p>
          <p>
            GAME <span>{depRound}</span>
          </p>
        </div>
        <p className="game__price">
          COST <span>{pricePoint}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Game;
