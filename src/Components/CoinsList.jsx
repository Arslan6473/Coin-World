import { Pagination } from ".";

function CoinsList({
  coins,
  totalcoins,
  coinPerPage,
  setCurrentPage,
  currentPage,
  isLoding,
}) {
  const mystyle = {
    background:
      "linear-gradient(90deg, rgba(193,71,233,1) 0%, rgba(25,55,109,1) 100%)",
  };
  return (
    <>
      <div className="bg-[#000000]" id="section2">
        <div className="text-[2.3rem] text-white font-bold text-left ml-9 mb-5">
          Market Update
        </div>
        <div className="max-w-100vw">
          <table className="min-w-[100%] mx-auto divide-y overflow-hidden ">
            <thead style={mystyle} className="text-white max-w-100vw ">
              <th className="p-5 text-[1.3rem] text-left">Coin</th>
              <th className="p-5 text-[1.3rem] ">Price</th>
              <th className="p-5 text-[1.3rem]">24h Change</th>
              <th className="p-5 text-[1.3rem]">Market Cap</th>
            </thead>
            {isLoding ? (
              <>
              <h1 className="text-white text-5xl text-center box-border p-6">
                Loding.....
              </h1>
            </>
              
            ) : (
              coins.map((coin) => (
                <tr 
                  key={coin.name}
                  className=" border-1 hover:bg-[#b860f270] cursor-pointer transition duration-300"
                >
                  <td className="text-white text-[1.3rem] flex justify-left items-center gap-4 p-6 ">
                    <img className="h-12" src={coin.image} alt="" />
                    {coin.name}
                  </td>
                  <td className="text-white p-6 text-[1.3rem] w-[25%]">
                    $ {coin.current_price}
                  </td>
                  <td className="p-6 text-[1.3rem] w-[25%]">
                    <span
                      className={`${
                        coin.price_change_percentage_24h <= 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {coin.price_change_percentage_24h}%
                    </span>
                  </td>
                  <td className="text-white p-6 text-[1.3rem] w-[27%]">
                    $ {coin.market_cap}
                  </td>
                </tr>
              ))
            )}
          </table>
        </div>
        <Pagination
          totalcoins={totalcoins}
          coinPerPage={coinPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      </div>
    </>
  );
}

export default CoinsList;
