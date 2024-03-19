import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Home,
  Navbar,
  ChooseUs,
  CoinsList,
  Footer,
  JoinUs,
} from "./Components";

function App() {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coinPerPage = 10;
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoding((isLoding) => !isLoding);
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=80&page=1&sparkline=false&locale=en`
        );
        setCoins(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoding((isLoding) => !isLoding);
    })();
  }, []);

  const lastIndex = currentPage * coinPerPage;
  const firstIndex = lastIndex - coinPerPage;
  const totalcoins = coins.length;
  const currentPostPage = coins.slice(firstIndex, lastIndex);

  return (
    <div className="App relative">
      <Navbar></Navbar>
      <Home coins={coins} isLoding={isLoding}></Home>
      <CoinsList
        coins={currentPostPage}
        totalcoins={totalcoins}
        coinPerPage={coinPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        isLoding={isLoding}
      ></CoinsList>
      <ChooseUs></ChooseUs>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
