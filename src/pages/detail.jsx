import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { apiKey } from "../App";
import Web3 from "web3";
import { GOVERNANCE_ABI, GOVERNANCE_CA } from "../web3.config";

const Detail = ({ account, setAccount }) => {
  const { id } = useParams();
  const [subject, setSubject] = useState(null);
  let [status, setStatus] = useState();
  const [time, setTime] = useState();
  const [address, setAddress] = useState();
  const [detail, setDetail] = useState();
  const [accept, setAccept] = useState();
  const [deny, setDeny] = useState();

  const date = new Date(time * 1000);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  const day = date.getDate();

  // 영문 월명 할당 코드
  if (month === 1) {
    month = "January";
  } else if (month === 2) {
    month = "February";
  } else if (month === 3) {
    month = "March";
  } else if (month === 4) {
    month = "April";
  } else if (month === 5) {
    month = "May";
  } else if (month === 6) {
    month = "June";
  } else if (month === 7) {
    month = "July";
  } else if (month === 8) {
    month = "August";
  } else if (month === 9) {
    month = "September";
  } else if (month === 10) {
    month = "October";
  } else if (month === 11) {
    month = "November";
  } else if (month === 12) {
    month = "December";
  }

  const web3 = new Web3(`https://goerli.infura.io/v3/${apiKey}`);
  const GVN_contract = new web3.eth.Contract(GOVERNANCE_ABI, GOVERNANCE_CA);

  const getProposalData = async () => {
    try {
      const proposalInfo = await GVN_contract.methods.getProposal(id).call();
      setSubject(proposalInfo.subject);
      setStatus(Number(proposalInfo.voteResults));
      setTime(Number(proposalInfo.time));
      setAddress(proposalInfo.maker);
      setDetail(proposalInfo.detail);
      setAccept(Number(proposalInfo.accept));
      setDeny(Number(proposalInfo.deny));
    } catch (error) {
      console.log("failed to get data of proposal");
    }
  };

  const onClickVote = async () => {
    if (account) {
      try {
        alert("you can vote");
      } catch (error) {
        alert("you can't vote");
      }
    } else {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getStatus = () => {
    if (status === 0) {
      status = "In Progress";
    } else if (status === 1) {
      status = "Proposed";
    } else if (status === 2) {
      status = "Rejected";
    }
  };
  getStatus();

  useEffect(() => {
    getProposalData();
  }, []);

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
          <div>
            <div>
              <div
                className={`text-xl border rounded-3xl w-fit mt-8 p-2 ${
                  status === "In Progress"
                    ? "text-amber-800 border-amber-800"
                    : status === "Proposed"
                    ? "text-green-500 border-green-500"
                    : status === "Rejected"
                    ? "text-red-500 border-red-500"
                    : ""
                }`}
              >
                {status}
              </div>
            </div>
            <div className="text-5xl font-bold mt-6">{subject}</div>
            <div className="opacity-60 mt-4 flex">
              <div>
                Created {month} {day}, {year} · Proposed by&nbsp;
              </div>
              <Link
                to={`https://goerli.etherscan.io/address/${address}`}
                target="_blank"
              >
                <button className="text-amber-900 hover:text-amber-700 duration-150">
                  {address}
                </button>
              </Link>
            </div>
            <div className="mt-4"></div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="">
                <div className="justify-between items-center flex p-8 text-2xl border-b border-amber-800">
                  <div>Voting progress</div>
                  <button
                    onClick={onClickVote}
                    className="p-2 text-amber-600 border border-amber-600 hover:border-amber-800 hover:text-amber-800 duration-200 rounded-xl"
                  >
                    Vote
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-14 min-h-screen bg-white rounded-xl shadow-2xl">
              <div>
                <div className="p-8 text-2xl border-b border-amber-800">
                  Proposal details
                </div>
                <div className="p-8">{detail}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
