import { GameItem } from "../GameItem";

export function GameList({ games }) {
  return (
    <div className="list-container">
      {Object.values(games).map((data, index) => {
        <GameItem data={data} key={index} />;
      })}
    </div>
  );
}
