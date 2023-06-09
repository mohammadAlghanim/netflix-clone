import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";

function Home() {
  const [movArr, setMovArr] = useState([]);
  const sendReq = async () => {
    const serverURL = `${process.env.REACT_APP_serverURL}trending`;
    const response = await fetch(serverURL);
    const data = await response.json();
    setMovArr(data);
  };
  useEffect(() => {
    sendReq();
  }, []);
  return (
    <div>
      <MovieList movie={movArr} />
    </div>
  );
}
export default Home;
