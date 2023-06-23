import { GameItem } from "../GameItem";

export const GameList = ({ games }) => (
  <div className="">
    {Object.values(games).map((data, index) => {
      <GameItem data={data} key={index} />;
    })}
  </div>
);
