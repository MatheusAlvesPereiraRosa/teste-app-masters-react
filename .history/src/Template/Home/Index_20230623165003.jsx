import { useState } from "react";
import "./Index.css";

function Home() {

  const [data, setData] = useState()

  useEffect(() => {
    getData();
  }, []);

  

  return (
    <section>
      
    </section>
  );
}

export default Home;
