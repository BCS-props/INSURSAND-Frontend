import { useEffect, useState } from "react";
import Web3 from "web3";
import { GOVERNANCE_ABI, GOVERNANCE_CA } from "../web3.config";
import Proposals from "./Proposals";
import { Link } from "react-router-dom";

const Proposal = ({ apiKey }) => {
  const [proposalNum, setProposalNum] = useState();
  const [proposalInfo, setProposalInfo] = useState();

  const web3 = new Web3(`https://goerli.infura.io/v3/${apiKey}`);
  const GVN_contract = new web3.eth.Contract(GOVERNANCE_ABI, GOVERNANCE_CA);

  useEffect(() => {
    async function getProposalData() {
      try {
        const proposalNums = Array.from(
          { length: proposalNum },
          (_, index) => index + 1
        );
        const proposalDatas = await Promise.all(
          proposalNums.map(async (id) => {
            const proposalInfo = await GVN_contract.methods
              .getProposal(id)
              .call();
            return proposalInfo;
          })
        );
        var proposals = await GVN_contract.methods.getP_number().call();
        setProposalNum(Number(proposals));
        // var proposalInfo = await GVN_contract.methods.getProposal(1).call();
        setProposalInfo(proposalDatas);
      } catch (error) {
        console.log("failed to get data of proposal");
      }
    }
    getProposalData();
  }, [proposalNum]);

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20">
      <div className="mx-96 w-1/2 mt-20 min-h-screen bg-white rounded-xl shadow-2xl">
        <div className="flex justify-between p-12">
          <div>
            <div className="text-3xl mb-2">Proposals</div>
            <div className="text-sm opacity-75">
              Total proposals: {proposalNum}
            </div>
          </div>
          <div>
            <Link to="/create">
              <button className="bg-amber-700/80 hover:bg-amber-800/80 rounded-xl transition duration-300 hover:scale-95">
                <div className="text-lg text-white py-2 px-4">
                  Create Proposal
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="grid gap-8 mx-12">
          {proposalInfo &&
            proposalInfo.map((v, i) => {
              return (
                <Proposals
                  key={i}
                  subject={v.subject}
                  agree={Number(v.agree)}
                  disagree={Number(v.disagree)}
                  id={Number(v.num)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Proposal;
