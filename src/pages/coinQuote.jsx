import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import Quote from "../components/Quote";

const CoinQuote = ({ account }) => {
  const [amount, setAmount] = useState(1);
  const [period, setPeriod] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [finalPrice, setFinalPrice] = useState();
  const [votes, setVotes] = useState(0);

  const onClickToggle = () => {
    setPeriod(0);
    setToggle(!toggle);
    setToggle2(false);
  };

  const onClickToggle2 = () => {
    setPeriod(1);
    setToggle2(!toggle2);
    setToggle(false);
  };

  const getFinalPrice = async () => {
    try {
      if (period === 0) {
        setFinalPrice((amount * 125) / 10000);
      } else if (period === 1) {
        setFinalPrice((amount * 760) / 10000);
      }
    } catch (error) {
      console.log(error);
    }
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
            Enter the coverage amount and Select the coverage period
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
                      Period
                    </div>
                    <div className="flex mt-3 gap-10 p-4 justify-around">
                      <button
                        className={`rounded-3xl p-8 ${toggle && "bg-red-100"}`}
                        onClick={onClickToggle}
                      >
                        30 days
                      </button>
                      <button
                        className={`rounded-3xl p-8 ${toggle2 && "bg-red-100"}`}
                        onClick={onClickToggle2}
                      >
                        365 days
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 border rounded-xl">
                    <div className="text-xl flex justify-center pt-4">
                      Amount
                    </div>
                    <div className="p-5 flex items-center justify-end">
                      <input
                        placeholder="0"
                        className="p-8 text-2xl flex w-1/3"
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
                <div className="p-6 text-2xl">Summary</div>
                <div className=" flex justify-between pt-20 p-4  mx-12">
                  <div>amount you'll pay:</div>
                  <div className="">{finalPrice} ETH</div>
                </div>
                <div className="flex-grow flex justify-between p-4  mx-12">
                  <div>votes you'll receive:</div>
                  <div>{votes}</div>
                </div>
                <div className="flex justify-center">
                  {<Quote amount={amount} period={period} account={account} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-40 mt-32">
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
