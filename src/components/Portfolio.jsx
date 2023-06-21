import { useEffect, useState } from "react";
import Web3 from "web3";
import {
  ERC20_ABI,
  ERC20_CA,
  GOVERNANCE_ABI,
  GOVERNANCE_CA,
} from "../web3.config";

const Portfolio = ({ account, apiKey }) => {
  const [voteNum, setVoteNum] = useState();
  const [tokenBalance, setTokenBalance] = useState();

  const web3 = new Web3(`https://goerli.infura.io/v3/${apiKey}`);
  const GVN_contract = new web3.eth.Contract(GOVERNANCE_ABI, GOVERNANCE_CA);
  const ERC20_contract = new web3.eth.Contract(ERC20_ABI, ERC20_CA);

  useEffect(() => {
    if (!account) {
      window.location.href = "/"; // account가 없을 시 메인으로 리다이렉트
    }
    async function getVoteNum() {
      try {
        if (!account || !web3 || !GVN_contract) return;
        var votes = await GVN_contract.methods.getVotePower(account).call();
        setVoteNum(Number(votes));
      } catch (error) {
        alert("failed to get number of votes");
      }
    }
    getVoteNum();

    async function getTokenBalance() {
      try {
        if (!account || !web3 || !ERC20_contract) return;
        var balances = await ERC20_contract.methods.balanceOf(account).call();
        setTokenBalance(Number(balances));
      } catch (error) {
        alert("failed to get token balances");
      }
    }
    getTokenBalance();
  });
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-600 pt-14 pb-20">
      <div className="ml-12 mr-12">
        <div>
          <div className="text-2xl font-bold text-slate-800">Dashboard</div>
          <div className="text-xl mt-12">
            <div className="border border-transparent border-b-slate-400 pb-20 grid grid-cols-4">
              <div>
                <div className="transition hover:scale-110 duration-500 delay-100 border border-amber-800 p-4 rounded-xl mr-6 pr-4 bg-amber-500/90 hover:bg-amber-500 shadow-lg shadow-amber-800/50">
                  <div className="font-medium text-sm border border-transparent border-b-stone-400">
                    Active Cover Amount
                  </div>
                  <div className="mt-4 text-white">0 USDT</div>
                </div>
              </div>
              <div>
                <div className="transition hover:scale-110 duration-500 delay-100 border border-amber-800 p-4 rounded-xl mr-6 pr-4 bg-amber-500/90 hover:bg-amber-500 shadow-lg shadow-amber-800/50">
                  <div className="font-medium text-sm border border-transparent border-b-stone-400">
                    Number of Votes
                  </div>
                  <div className="mt-4 text-white">{voteNum}</div>
                </div>
              </div>
              <div>
                <div className="transition hover:scale-110 duration-500 delay-100 border border-amber-800 p-4 rounded-xl pr-4 bg-amber-500/90 hover:bg-amber-500 shadow-lg shadow-amber-800/50">
                  <div className="font-medium text-sm border border-transparent border-b-stone-400">
                    My Balance (USDT)
                  </div>
                  <div className="mt-4 text-white">{tokenBalance} USDT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="mt-8 text-xl text-slate-700">My Cover NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
