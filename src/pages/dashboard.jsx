import Web3 from "web3";
import { GOVERNANCE_ABI, GOVERNANCE_CA } from "../web3.config";
import { useEffect, useState } from "react";

const DashBoard = ({ account, setAccount, apiKey }) => {
  const [voteNum, setVoteNum] = useState();
  const web3 = new Web3(`https://goerli.infura.io/v3/${apiKey}`);
  const contract = new web3.eth.Contract(GOVERNANCE_ABI, GOVERNANCE_CA);
  useEffect(() => {
    async function getVoteNum() {
      try {
        if (!account || !web3 || !contract) return;
        var votes = await contract.methods.getVotePower().call();
        setVoteNum(Number(votes));
        console.log(Number(votes));
      } catch (error) {
        alert("failed to get number of votes");
      }
    }
    getVoteNum();
  });
  return (
    <div>
      <div className="text-xl">number of votes: {voteNum}</div>
    </div>
  );
};

export default DashBoard;
