import React from "react";
import "./index.css";

import { GameItem } from "../GameItem/index";

export const GameList = ({ data }) => {
  return (
    <div className="game-list">
      {Object.values(data).map((data) => {
        return (
          <GameItem
            title={data.title}
            thumbnail={data.thumbnail}
            shortDescription={data.short_description}
            genre={data.genre}
            platform={data.platform}
            releaseDate={data.release_date}
            key={data.id}
          />
        );
      })}
    </div>
  );
};

