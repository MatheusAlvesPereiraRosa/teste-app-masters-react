import axios from "axios";
import { useState, useEffect } from "react";
import "./Index.css";

function Home() {
  const [data, setData] = useState();

  const getData = async () => {
    await axios
      .get("https://api.publicapis.org/entries", {
        headers: {
          "content-type": "application/json",
          "dev-email-address": "matpr2.a98@gmail.com",
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return <section />;
}

export default Home;
