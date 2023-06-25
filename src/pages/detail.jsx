import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GOVERNANCE_ABI, GOVERNANCE_CA } from "../web3.config";
import Web3 from "web3";
import { BiArrowBack } from "react-icons/bi";

const Detail = ({ apiKey }) => {
  const { id } = useParams();

  const [proposalInfo, setProposalInfo] = useState();
  const [proposalNum, setProposalNum] = useState();

  const [subject, setSubject] = useState();
  const [date, setDate] = useState();
  const [address, setAddress] = useState();
  const [detail, setDetail] = useState();

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
        setProposalInfo(proposalDatas);
        setSubject(proposalInfo[id - 1].subject);
        var currentDate = new Date(Number(proposalInfo[id - 1].time));
        setDate(currentDate.getDay());
        setAddress(proposalInfo[id - 1].maker);
        setDetail(proposalInfo[id - 1].detail);
      } catch (error) {
        console.log("failed to get data of proposal");
      }
    }
    getProposalData();
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20">
      <div className="mx-80 mt-8">
        <div>
          <Link to="/governance">
            <button>
              <div className="flex items-center">
                <BiArrowBack className="mr-1" />
                Back
              </div>
            </button>
          </Link>
          <div className="text-4xl font-bold mt-4">{subject}</div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
