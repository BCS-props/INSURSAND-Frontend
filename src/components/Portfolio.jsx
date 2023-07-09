import { useEffect } from "react";
import { useGet } from "../hooks/get";
import MyNfts from "./MyNfts";

const Portfolio = ({ account }) => {
  const {
    getTokenBalance,
    tokenBalance,
    getVoteNum,
    voteNum,
    getTotalSpend,
    totalSpend,
  } = useGet(account);

  useEffect(() => {
    if (!account) {
      window.location.href = "/"; // account가 없을 시 메인으로 리다이렉트
    }
    getVoteNum();
    getTokenBalance();
    getTotalSpend();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20">
      <div className="ml-12 mr-12 mt-20">
        <div>
          <div className="text-3xl font-bold font-montserrat text-amber-900/80">
            Dashboard
          </div>
          <div className="text-xl mt-12 font-montserrat">
            <div className="pb-20 grid grid-cols-3 mx-12">
              <div>
                <div className="transition hover:scale-105 duration-300 delay-100 border border-amber-800 p-4 rounded-xl mr-6 pr-4 bg-amber-500/70 hover:bg-amber-500/90 shadow-lg shadow-amber-800/50">
                  <div className="font-medium text-sm underline">
                    Active Cover Amount
                  </div>
                  <div className="mt-4 text-black/80">{totalSpend} USDT</div>
                </div>
              </div>
              <div>
                <div className="transition hover:scale-105 duration-300 delay-100 border border-amber-800 p-4 rounded-xl pr-4 mr-6 bg-amber-500/70 hover:bg-amber-500/90 shadow-lg shadow-amber-800/50">
                  <div className="font-medium text-sm underline">
                    My Balance (USDT)
                  </div>
                  <div className="mt-4 text-black/80">{tokenBalance} USDT</div>
                </div>
              </div>
              <div>
                <div className="transition hover:scale-105 duration-300 delay-100 border border-amber-800 p-4 rounded-xl pr-4 bg-amber-500/70 hover:bg-amber-500/90 shadow-lg shadow-amber-800/50">
                  <div className="font-medium text-sm underline">
                    Number of Votes
                  </div>
                  <div className="mt-4 text-black/80">{voteNum}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <MyNfts account={account} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
