import axios from "axios";
import { useState, useEffect } from "react";

import "./index.css";
import { Button } from "../../Components/Button";
import GameList from "../../Components/GameList";
import { Loading } from "../../Components/Loading";
import { SearchBar } from "../../Components/SearchBar";

function Home() {
  const [data, setData] = useState({});
  const [fullData, setFullData] = useState({});
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({});

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
        setData(response.data.slice(page, DATA_PER_PAGE));
        setFullData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError({ ...error, eStatus: response.status, eValue: response });
        console.log(error.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = searchValue
    ? fullData.filter((data) => {
        return data.title.toLowerCase().includes(searchValue.toLowerCase());
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

      {filteredData.length > 0 && <GameList data={filteredData} />}

      {filteredData.length === 0 && (
        <p className="no-result">Sem resultados para a pesquisa</p>
      )}

      {filteredData.length === 0 && (
        <p className="no-result">Sem resultados para a pesquisa</p>
      )}

      {!searchValue && !isLoading && (
        <Button onClick={loadMoreData} disabled={NO_MORE_DATA} />
      )}
    </section>
  );
}

export default Home;
