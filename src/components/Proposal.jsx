import { useEffect, useState } from "react";
import Web3 from "web3";
import { GOVERNANCE_ABI, GOVERNANCE_CA } from "../web3.config";

const Proposal = ({ apiKey }) => {
  const [proposalNum, setProposalNum] = useState();

  const web3 = new Web3(`https://goerli.infura.io/v3/${apiKey}`);
  const GVN_contract = new web3.eth.Contract(GOVERNANCE_ABI, GOVERNANCE_CA);
  async function getProposalNum() {
    try {
      var proposals = await GVN_contract.methods.getP_number().call();
      setProposalNum(Number(proposals));
    } catch (error) {
      alert("failed to get number of proposals");
    }
  }

  useEffect(() => {
    getProposalNum();
  });
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-600 pt-14 pb-20">
      <div className="mx-80 min-h-screen bg-white rounded-xl shadow-2xl">
        <div className="flex justify-between p-12">
          <div className="">
            <div className="text-3xl mb-2">Proposals</div>
            <div className="text-sm opacity-75">
              Number of current proposals: {proposalNum}
            </div>
          </div>
          <div>
            <button className="bg-amber-700/80 hover:bg-amber-800/80 rounded-xl transition duration-300 hover:scale-95">
              <div className="text-lg text-white py-2 px-4">
                Create Proposal
              </div>
            </button>
          </div>
        </div>
        <div className="px-12">
          <div className="bg-amber-600/80 rounded-xl hover:bg-amber-600/40 duration-200">
            <div className="p-4">
              <div className="flex justify-between">
                <div className="">Subject of proposals</div>
                <div>Proposal's status</div>
              </div>
              <div className="text-xs mt-2 opacity-50">votes: </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proposal;
