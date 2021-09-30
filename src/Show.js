import React, { useState, useEffect } from "react";
import Game from "./Game.js";
import data from "./data.js";
import "./Show.css";

function Show() {
  const [dataa, setData] = useState([]);
  const [sortType, setSortType] = useState("name");

  useEffect(() => {
    const sortArray = type => {
      const types = {
        name: "name",
        price: "price",
        atk: "atk",
        tos: "tos",
        dep: "dep",
        total: "total",
      };
      const sortProperty = types[type];
      const sorted = [...data].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      // data는 data.js를 가져온것
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <div className="wrap">
      <div className="select">
        <select onChange={e => setSortType(e.target.value)}>
          <option value="name">이름</option>
          <option value="price">누적 금액</option>
          <option value="atk">공격승률</option>
          <option value="tos">토스승률</option>
          <option value="dep">수비승률</option>
          <option value="total">전체승률</option>
        </select>
      </div>
      <section className="container">
        <div className="games">
          {dataa.map(person => (
            <Game
              id={person.id}
              key={person.id}
              total={person.total}
              name={person.name}
              price={person.price}
              atk={person.atk}
              tos={person.tos}
              dep={person.dep}
              atkRound={person.atkRound}
              tosRound={person.tosRound}
              depRound={person.depRound}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Show;
