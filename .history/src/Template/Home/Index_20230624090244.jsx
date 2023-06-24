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
  const [statusReq, setStatusReq] = useState({
    message: "",
    code: 0,
    error: false,
    timeout: false,
  });

  // constantes
  const DATA_PER_PAGE = 15;
  const NO_MORE_DATA = page + DATA_PER_PAGE >= fullData.length;
  const filteredData = searchValue
    ? fullData.filter((data) => {
        return data.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : data;

  const getData = async () => {
    await axios
      .get("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/", {
        headers: {
          "content-type": "application/json",
          "dev-email-address": "matpr2.a98@gmail.com",
        },
        timeout: 5000,
      })
      .then((response) => {
        setData(response.data.slice(page, DATA_PER_PAGE));
        setFullData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setIsLoading(false);
          setStatusReq({
            ...statusReq,
            message: error.message,
            code: error.response.status,
            error: true,
          });
        } else if (error.request) {
          setIsLoading(false);
          setStatusReq({
            ...statusReq,
            message: "A requisição demorou mais do que 5 segundos",
            code: "Timeout",
            timeout: true,
          });
          console.log("A requisição demorou muito");
        }

        console.log(error.config);
      });
  };

  console.log(statusReq);

  useEffect(() => {
    getData();

    console.log("executei");
  }, []);

  //funções

  function getNextPage(page, DATA_PER_PAGE) {
    const nextPage = page + DATA_PER_PAGE;

    return nextPage;
  }

  function getNextData(nextPage, DATA_PER_PAGE) {
    const nextData = fullData.slice(nextPage, nextPage + DATA_PER_PAGE);

    data.push(...nextData);

    return data;
  }

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

  return (
    <section className="container">
      <div className="search-container">
        <SearchBar searchValue={searchValue} handleChange={handleChange} />

        {!!searchValue && <h1>Search value: {searchValue}</h1>}
      </div>

      {isLoading && <Loading />}

      {filteredData.length > 0 && <GameList data={filteredData} />}

      {filteredData.length === 0 && (
        <p className="no-result">Sem resultados para a pesquisa</p>
      )}

      {statusReq.error === true &&
        statusReq.code === /[5][0][0, 2, 3, 4, 7, 8, 9]/ &&
        (
          <p className="no-result">
            O servidor falhou em responder, tente recarregar a página
          </p>
        )}

      {statusReq.error === true &&
        !statusReq.code !== /[5][0][0, 2, 3, 4, 7, 8, 9]/ &&
        (
          <p className="no-result">
            O servidor não conseguirá responder por agora, tente voltar
            novamente mais tarde
          </p>
        )}

      {statusReq.timeout === true && statusReq.code === "Timeout" && (
        <p className="no-result">
          O servidor demorou para responder, tente mais tarde
        </p>
      )}

      {!searchValue && !isLoading && statusReq.error === false && (
        <Button onClick={loadMoreData} disabled={NO_MORE_DATA} />
      )}
    </section>
  );
}

export default Home;
