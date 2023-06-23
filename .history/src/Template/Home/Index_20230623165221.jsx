import { useState, useEffect } from "react";
import "./Index.css";

function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("https://api.publicapis.org/entries", {
        headers: {
          "content-type": "application/json",
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

  return <section />;
}

export default Home;
