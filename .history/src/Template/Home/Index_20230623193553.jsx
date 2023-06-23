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
        setData(response.data.entries.slice(page, DATA_PER_PAGE));
        setFullData(response.data.entries);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = searchValue
    ? fullData.filter((data) => {
        return data.API.toLowerCase().includes(searchValue.toLowerCase());
      })
    : data;

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const loadMoreData = () => {
    const nextPage = getNextPage(page, DATA_PER_PAGE);
    const data = getNextData(nextPage, DATA_PER_PAGE);

    setData(data);
    setPage(nextPage);
  };

  function getNextPage(page, DATA_PER_PAGE) {
    const nextPage = page + DATA_PER_PAGE;

    return nextPage;
  }

  function getNextData(nextPage, DATA_PER_PAGE) {
    const nextData = fullData.slice(nextPage, nextPage + DATA_PER_PAGE);

    data.push(...nextData);

    return data;
  }

  console.log(data);

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}

        <SearchBar searchValue={searchValue} handleChange={handleChange} />
      </div>

      {isLoading && <Loading />}

      <GameList data={data} />

      {!searchValue && !isLoading && (
        <Button
          onClick={loadMoreData}
          disabled={NO_MORE_DATA}
        />
      )}
    </section>
  );
}

export default Home;
