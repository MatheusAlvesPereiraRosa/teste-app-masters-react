import "./Index.css";
import { GameList } from "../../Components/GameList";

function Home() {
  return (
    <div className="App">
      <section>
        <GameList />
      </section>
    </div>
  );
}

export default Home;
