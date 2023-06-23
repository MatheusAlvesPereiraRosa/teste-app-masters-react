import axios from "axios";
import { useState, useEffect } from "react";

import "./Index.css";

function Home() {
  var [data, setData] = useState({});

  const getData = async () => {
    await axios
      .get("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/", {
        headers: {
          "content-type": "application/json",
          "dev-email-address": "matpr2.a98@gmail.com",
        },
      })
      .then((response) => {
        console.log(response);
        console.log(Object.values(response.data));
        setData(Object.values(response.data));
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return <section />;
}

export default Home;
