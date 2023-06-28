import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { apiKey } from "../App";
import Web3 from "web3";
import { GOVERNANCE_ABI, GOVERNANCE_CA } from "../web3.config";
import { useOnClick } from "../hooks/onClick";

const Detail = ({ account, setAccount }) => {
  const { id } = useParams();

  const [subject, setSubject] = useState(null);
  const [time, setTime] = useState();
  const [address, setAddress] = useState();
  const [summary, setSummary] = useState();
  const [method, setMethod] = useState();
  const [conclusion, setConclusion] = useState();
  const [status, setStatus] = useState("In Progress");
  const [agree, setAgree] = useState();
  const [disagree, setDisagree] = useState();

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

  const getProposalData = async () => {
    try {
      const proposalInfo = await GVN_contract.methods.getProposal(id).call();
      setSubject(proposalInfo.subject);
      setTime(Number(proposalInfo.time));
      setAddress(proposalInfo.maker);
      setSummary(proposalInfo.summary);
      setMethod(proposalInfo.method);
      setConclusion(proposalInfo.conclusion);
      setAgree(Number(proposalInfo.agree));
      setDisagree(Number(proposalInfo.disagree));
    } catch (error) {
      console.log("failed to get data of proposal");
    }
  };

  const web3 = new Web3(`https://goerli.infura.io/v3/${apiKey}`);
  const GVN_contract = new web3.eth.Contract(GOVERNANCE_ABI, GOVERNANCE_CA);
  // 안건 종료 시간 구하는 함수
  const getD_day = (time) => {
    const twoWeeks = 1209600;
    const twoWeeksLater = time + twoWeeks; // 2주 뒤 시간
    const currentTime = Math.floor(Date.now() / 1000); // 현재 시간

    const timeDiff = twoWeeksLater - currentTime;

    const days = Math.floor(timeDiff / (24 * 60 * 60)); // 일 단위 계산
    const hours = Math.floor((timeDiff % (24 * 60 * 60)) / (60 * 60)); // 시 단위 계산
    const minutes = Math.floor((timeDiff % (60 * 60)) / 60); // 분 단위 계산
    const seconds = timeDiff % 60; // 초 단위 계산

    return { days, hours, minutes, seconds, timeDiff };
  };

  const { days, hours, minutes, seconds, timeDiff } = getD_day(time);

  // 프론트엔드에 실시간으로 남은 시간 표시
  // console.log(
  //   `안건 종료까지 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았습니다.`
  // );
  // console.log(timeDiff);

  const getStatus = async () => {
    if (timeDiff <= 0 && agree > disagree) {
      try {
        setStatus("Proposed");
      } catch (error) {
        console.log(error);
      }
    } else if (timeDiff <= 0 && agree <= disagree) {
      try {
        setStatus("Rejected");
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const getTotalVotePower()

  // hooks의 useOnClick 사용
  const { onClickAgree, onClickDisagree } = useOnClick(id, account, setAccount);

  console.log(agree);
  console.log(disagree);

  useEffect(() => {
    getProposalData();
    getStatus();
  }, [status]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20">
      <div className="mx-96 mt-8 flex justify-center items-center">
        <div className="">
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
                  <div className="">Voting progress</div>
                </div>
              </div>
            </div>
            <div className="mt-14 bg-white rounded-xl shadow-2xl border">
              <div>
                <div className="p-8 text-2xl border-b border-amber-800">
                  Proposal details
                </div>
                <div className="bg-gradient-to-r from-amber-400/80 to-amber-600/80 rounded-xl shadow-inner shadow-amber-700 m-8 pb-72">
                  <div className="p-8">
                    <div className="text-xl font-medium mb-3">Summary</div>
                    <div>{summary}</div>
                  </div>
                  <div className="p-8">
                    <div className="text-xl font-medium mb-3">Method</div>
                    <div>{method}</div>
                  </div>
                  <div className="p-8">
                    <div className="text-xl font-medium mb-3">Conclusion</div>
                    <div>{conclusion}</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-52 pb-4">
                <button
                  onClick={onClickAgree}
                  className="p-2 flex items-center gap-2 text-green-600 border border-green-600 hover:green-800 hover:text-green-800 duration-200 rounded-xl"
                >
                  <AiOutlineCheck />
                  Agree
                </button>
                <button
                  onClick={onClickDisagree}
                  className="p-2 flex items-center gap-2 text-red-600 border border-red-600 hover:border-red-800 hover:text-red-800 duration-200 rounded-xl"
                >
                  <AiOutlineClose />
                  Disagree
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
