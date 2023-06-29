import Web3 from "web3";
import {
  ERC20_ABI,
  ERC20_CA,
  GOVERNANCE_ABI,
  GOVERNANCE_CA,
} from "../web3.config";
import { apiKey } from "../App";
import { useState } from "react";
export function useGet(account) {
  const web3 = new Web3(`https://goerli.infura.io/v3/${apiKey}`);
  const GVN_contract = new web3.eth.Contract(GOVERNANCE_ABI, GOVERNANCE_CA);
  const ERC20_contract = new web3.eth.Contract(ERC20_ABI, ERC20_CA);

  const [tokenBalance, setTokenBalance] = useState();
  const [voteNum, setVoteNum] = useState();
  const [totalVoteNum, setTotalVoteNum] = useState();

  const getTokenBalance = async () => {
    try {
      if (!account || !web3 || !ERC20_contract) return;
      var balances = await ERC20_contract.methods.balanceOf(account).call();
      setTokenBalance(Number(balances));
    } catch (error) {
      alert("failed to get token balances");
    }
  };

  const getVoteNum = async () => {
    try {
      if (!account || !web3 || !GVN_contract) return;
      var votes = await GVN_contract.methods.getVotePower(account).call();
      setVoteNum(Number(votes));
    } catch (error) {
      alert("failed to get number of votes");
    }
  };

  const getTotalVotePower = async () => {
    try {
      var totalVotes = await GVN_contract.methods.getTotalVotePower().call();
      setTotalVoteNum(Number(totalVotes));
    } catch (error) {
      alert("failed to get total votes");
    }
  };

  return {
    getTokenBalance,
    tokenBalance,
    getVoteNum,
    voteNum,
    getTotalVotePower,
    totalVoteNum,
  };
}
