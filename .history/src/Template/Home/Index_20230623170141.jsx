import axios from "axios";
import { useState, useEffect } from "react";

import "./Index.css";
import { GameList } from "../../Components/GameList";

function Home() {
  const [data, setData] = useState();

  const getData = async () => {
    await axios
      .get("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/", {
        headers: {
          "content-type": "application/json",
          "dev-email-address": "matpr2.a98@gmail.com",
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <GameList />
    </section>
  );
}

export default Home;
