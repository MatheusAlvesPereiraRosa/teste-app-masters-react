import React from "react";
import "./index.css";

import GameItem from "../GameItem/index";

function GameList({ data }) {
  return (
    <div className="game-list">
      {Object.values(data).map((data, index) => {
        return (
          <GameItem title={data.title} thumbnail={data.thumbnail} key={index} />
        );
      })}
    </div>
  );
}

export default GameList;
