import axios from "axios";
import { useState, useEffect } from "react";

import "./Index.css";
import GameList from "../../Components/GameList";
import { Loading } from "../../Components/Loading";

function Home() {
  const [data, setData] = useState({});
  const [fullData, setFullData] = useState({});
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // constantes
  const DATA_PER_PAGE = 15;
  const NO_MORE_DATA = page + DATA_PER_PAGE >= fullData.length;

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
        setIsLoading(false);
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
      {isLoading && <Loading />}

      <GameList data={data} />
    </section>
  );
}

export default Home;
