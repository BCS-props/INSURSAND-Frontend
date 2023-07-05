import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import Quote from "../components/Quote";

const CoinQuote = ({ account }) => {
  const [amount, setAmount] = useState(1);
  const [period, setPeriod] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);
  const [votes, setVotes] = useState(0);
  const [totalRate, setTotalRate] = useState(0);
  const [dailyRate, setDailyRate] = useState(0);
  const [coveragePeriod, setCoveragePeriod] = useState(0);

  const onClickToggle = () => {
    // 30
    setPeriod(0);
    setToggle(!toggle);
    setToggle2(false);
  };

  const onClickToggle2 = () => {
    // 365
    setPeriod(1);
    setToggle2(!toggle2);
    setToggle(false);
  };

  const getPeriod = async () => {
    try {
      if (period === 0) {
        setCoveragePeriod(30);
      } else if (period === 1) {
        setCoveragePeriod(365);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFinalPrice = async () => {
    try {
      if (period === 0) {
        // 30days
        setFinalPrice((amount * 125) / 10000);
        setTotalRate(1.25);
        setDailyRate(0.0416);
      } else if (period === 1) {
        // 365days
        setFinalPrice((amount * 760) / 10000);
        setTotalRate(7.6);
        setDailyRate(0.0208);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(typeof amount);
  };

  const getVotes = async () => {
    try {
      if (finalPrice < 100) {
        setVotes(1);
      } else if (finalPrice <= 200) {
        setVotes(2);
      } else if (finalPrice > 200) {
        setVotes(3);
      } else {
        setVotes(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFinalPrice();
    getPeriod();
  }, [amount, period]);

  useEffect(() => {
    getVotes();
  }, [finalPrice]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20">
      <div className="mx-40 mt-24">
        <div>
          <Link to="/covers">
            <button>
              <div className="flex items-center">
                <BiArrowBack className="mr-1" />
                Back
              </div>
            </button>
          </Link>
          <div className="mt-4 text-5xl text-amber-900">Buy cover</div>
          <div className="mt-3 text-lg text-amber-900/80">
            Enter the coverage amount and Select the coverage period and Get the
            quote!
          </div>
          <div className="flex flex-row gap-20">
            <div className="w-2/3">
              <div className="mt-12 bg-white rounded-xl shadow-2xl h-full">
                <div className="p-6 text-2xl">Quote details</div>
                <div className="p-6">
                  This product covers any token or combination of tokens you
                  <br />
                  have in the protocol. In case of a claim, you'll receive the
                  <br />
                  equivalent of your lost funds in ETH up to the covered amount.
                  <br />
                  Alternatively you can select DAI.
                </div>
                <div className="p-6 flex justify-evenly gap-4">
                  <div className="border rounded-xl w-1/2">
                    <div className="text-xl flex justify-center pt-4">
                      Coverage Period
                    </div>
                    <div className="flex mt-3 gap-10 p-4 justify-around">
                      <button
                        className={`rounded-3xl p-8 border-2 transition duration-300 hover:scale-95 hover:text-blue-600/50 hover:border-blue-500/50 hover:bg-blue-100/50 ${
                          toggle &&
                          "bg-blue-100 border-blue-500 text-blue-600 hover:text-blue-600/50 hover:border-blue-500/50 hover:bg-blue-100/50"
                        }`}
                        onClick={onClickToggle}
                      >
                        30 days
                      </button>
                      <button
                        className={`rounded-3xl p-8 border-2 transition duration-300 hover:scale-95 hover:text-blue-600/50 hover:border-blue-500/50 hover:bg-blue-100/50 ${
                          toggle2 &&
                          "bg-blue-100 border-blue-500 text-blue-600 hover:text-blue-600/50 hover:border-blue-500/50 hover:bg-blue-100/50"
                        }`}
                        onClick={onClickToggle2}
                      >
                        365 days
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 border rounded-xl">
                    <div className="text-xl flex justify-center pt-4">
                      Coverage Amount
                    </div>
                    {/* <div className="flex justify-end mr-12">
                      {period === null ? <div>enter period!</div> : <div></div>}
                    </div> */}
                    <div className="p-5 flex items-center justify-end">
                      <input
                        placeholder="0"
                        type="number"
                        className="p-8 pr-4 text-2xl flex w-3/5"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        style={{ textAlign: "right" }}
                      ></input>
                      <span className="text-2xl text-amber-800">ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="mt-12 bg-white rounded-xl shadow-2xl h-full flex flex-col">
                <div className="p-6 text-2xl">Receipt</div>
                <div className="mx-12">
                  <div className="border mt-8 rounded-xl">
                    <div className="p-2 font-bold">Request</div>
                    <div className="flex justify-between p-3 mx-8 text-sm">
                      <div>coverage period:</div>
                      <div className="">{coveragePeriod} days</div>
                    </div>
                    <div className="flex justify-between p-3 mx-8 text-sm">
                      <div>coverage amount:</div>
                      <div className="">{amount} ETH</div>
                    </div>
                  </div>
                  <div className="border mt-8 rounded-xl">
                    <div className="p-2 font-bold">Quote</div>
                    <div className="flex justify-between p-3 mx-8 text-sm">
                      <div>amount you'll pay:</div>
                      <div className="">{finalPrice} ETH</div>
                    </div>
                    <div className="flex justify-between p-3 mx-8 text-sm">
                      <div>votes you'll receive:</div>
                      <div>{votes}</div>
                    </div>
                    <div className="flex-grow flex justify-between p-3 mx-8 text-sm">
                      <div>fee rate:</div>
                      <div className="flex">
                        <div>{totalRate}% (total)</div>
                        <div className="mx-1 "> | </div>
                        <div>{dailyRate}% (daily)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center mt-8">
                    {
                      <Quote
                        finalPrice={finalPrice}
                        period={period}
                        account={account}
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-40 mt-24">
        <div className=" bg-white rounded-xl shadow-2xl h-full">
          <div className="p-6 text-2xl">Terms and conditions</div>
          <div className="p-6">
            This product covers any token or combination of tokens you
            <br />
            have in the protocol. In case of a claim, you'll receive the
            <br />
            equivalent of your lost funds in ETH up to the covered amount.
            <br />
            Alternatively you can select DAI.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinQuote;
