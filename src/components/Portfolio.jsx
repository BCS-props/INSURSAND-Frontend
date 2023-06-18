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
      window.location.href = "/"; // 메인 페이지로 리다이렉트
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
        console.log(balances);
      } catch (error) {
        alert("failed to get token balances");
      }
    }
    getTokenBalance();
  });
  return (
    <div className="min-h-screen bg-slate-100 pt-14 pb-20">
      <div className="ml-12">
        <div>
          <div className="text-2xl font-bold text-slate-800">My Portfolio</div>
          <div className="text-xl mt-12">
            <div className="flex border border-transparent border-b-slate-400 pb-20">
              <div>
                <div className="border border-transparent border-r-slate-400 mr-4 pr-4">
                  <div className="font-medium text-sm">Active Cover Amount</div>
                  <div className="mt-4 text-slate-500">0 USDT</div>
                </div>
              </div>
              <div>
                <div className="border border-transparent border-r-slate-400 mr-4 pr-4">
                  <div className="font-medium text-sm">Number of Votes</div>
                  <div className="mt-4 text-slate-500">{voteNum}</div>
                </div>
              </div>
              <div>
                <div className="border border-transparent border-r-slate-400 pr-4">
                  <div className="font-medium text-sm">My Balance (USDT)</div>
                  <div className="mt-4 text-slate-500">{tokenBalance} USDT</div>
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
