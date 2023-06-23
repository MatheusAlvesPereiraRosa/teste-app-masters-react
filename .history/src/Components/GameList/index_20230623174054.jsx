import React from "react";

import { GameItem } from "../GameItem/index";

function GameList({ data }) {
  return (
    <div>
      {Object.values(data).map((data, index) => {
        return <p>{data.title}</p>;
      })}
    </div>
  );
}

export default GameList;
