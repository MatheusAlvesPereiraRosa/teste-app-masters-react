import axios from "axios";
import { useState, useEffect } from "react";

import "./Index.css";
import { Gamelist } from "../../Components/GameList";

function Home() {
  const [data, setData] = useState({});

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
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <section className="container">
      <GameList data={data} />
    </section>
  );
}

export default Home;
