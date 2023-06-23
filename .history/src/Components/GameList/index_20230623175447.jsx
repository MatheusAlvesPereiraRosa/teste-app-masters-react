import React from "react";

import { GameItem } from "../GameItem/index";

function GameList({ data }) {
  return (
    <div>
      {data.map((data, index) => {
        return (
          <div>
            <h1>{data.title}</h1>
            <img src={data.thumbnail} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default GameList;
