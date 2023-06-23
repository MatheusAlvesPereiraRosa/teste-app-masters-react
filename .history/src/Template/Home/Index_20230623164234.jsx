import "./Index.css";
import { GameList } from "../../Components/GameList";
import { useState } from "react";

function Home() {
  const [data, setData] = useState()

  return (
    <section>
      <GameList />
    </section>
  );
}

export default Home;
