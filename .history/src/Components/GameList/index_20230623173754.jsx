import React from "react";

import { GameItem } from "../GameItem/index";

export function GameList({ data }) {
  return (
    <div>
      {Object.values(data).map((data, index) => {
        return <GameItem data={data} key={index} />;
      })}
    </div>
  );
}
