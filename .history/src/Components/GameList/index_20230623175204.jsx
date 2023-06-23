import React from "react";

import { GameItem } from "../GameItem/index";

function GameList({ data = [] }) {
  return (
    <div>
      {Object.values(data).map((data, index) => {
        return (
          <GameItem title={data.title} thumbnail={data.thumbnail} key={index} />
        );
      })}
    </div>
  );
}

export default GameList;
