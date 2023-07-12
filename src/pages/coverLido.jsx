import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import QuoteLido from "../components/QuoteLido";
import { AiOutlineArrowDown, AiOutlineSelect } from "react-icons/ai";
import { IoReaderOutline } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import { BALANCE_contract, LIDO_contract, NFT_contract } from "./covers";

const CoverLido = ({ account }) => {
  const [ethPrice, setEthPrice] = useState(null); // 현재 ETH 가격 조회
  const [activePrice, setActivePrice] = useState(); // 보험금을 청구할 수 있는 LINK 가격
  const [ratio, setRatio] = useState(10);
  const [discountRate, setDiscountRate] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [votes, setVotes] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  // LIDO useState
  const [myRequestId, setMyRequestId] = useState([]);
  const [requestId, setRequestId] = useState();
  const [selectedId, setSelectedId] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [amountWei, setAmountWei] = useState(0);
  const [timestamp, setTimestamp] = useState();
  const [amount, setAmount] = useState(0);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleChange = (e) => {
    setRatio(e.target.value);
  };

  const getEthPrice = async () => {
    try {
      var ethPrices = await BALANCE_contract.methods.getWETHBalances().call();
      setEthPrice(Number(ethPrices));
    } catch (error) {
      console.log(error);
    }
  };

  const getFinalPrice = async () => {
    try {
      var finalPrices = await LIDO_contract.methods
        .calculateLido_two(requestId, ratio)
        .call();
      setFinalPrice(finalPrices[0]);
      setDiscountRate(finalPrices[1]);
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

  const getRequestId = async () => {
    try {
      const requestIds = await LIDO_contract.methods
        .getRequests(account)
        .call();
      setMyRequestId(requestIds);
    } catch (error) {
      console.log(error);
    }
  };

  const getAmountTimestamp = async () => {
    try {
      var amountTimestamps = await LIDO_contract.methods
        .getAmountTimestamp(requestId)
        .call();
      setAmountWei(amountTimestamps[1]);
      setTimestamp(amountTimestamps[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFinalPrice();
    getAmountTimestamp();
  }, [requestId, ratio]);

  useEffect(() => {
    getVotes();
  }, [finalPrice]);

  useEffect(() => {
    getRequestId();
  }, []);

  useEffect(() => {
    getEthPrice();
    setActivePrice(Math.floor(ethPrice * ratio) / 100);
    setDiscountAmount((finalPrice * (discountRate / 1000)).toFixed(3));
    setAmount((amountWei / 10 ** 18).toFixed(2));
    // setAmount(amountWei / 10 ** 18);
  }, [amount, ratio, requestId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20 font-nunito">
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
          <div>
            <div className="mt-4 text-5xl text-amber-900 flex items-center gap-2">
              <img
                src={`${process.env.PUBLIC_URL}/images/lido_logo.png`}
                alt="link"
                className="w-14"
              />
              Buy LIDO Unstaking Cover
            </div>
            <div className="mt-3 text-lg text-amber-900/80">
              Enter the request ID and decide the coverage ratio.
              <br />
              Then get the quote!
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-12 w-2/3 mr-20">
            <div className="">
              <div className="mt-12 bg-white rounded-xl shadow-2xl h-full">
                <div className="p-6 text-2xl flex items-center gap-2">
                  <AiOutlineSelect />
                  Coverage Options
                </div>
                <div className="p-6">
                  ·{" "}
                  <div className="inline underline">
                    LIDO staking service has a fixed maximum lock-up period of 5
                    days
                  </div>{" "}
                  for rewarding purposes.
                  <br /> <br />
                  · The coverage amount will be calculated differently based on
                  the chosen coverage amount and duration.
                  <br />
                  <br />· You will select the{" "}
                  <div className="inline underline">requestId</div> of your
                  staking.
                  <br />
                  <br />· If the price declines to the user-inputted coverage
                  decline rate, which can range&nbsp;
                  <div className="inline underline font-bold">
                    from 5% to 90%
                  </div>
                  ,
                  <br />
                  you will be eligible to receive the insurance payout.
                  <br />
                  <br /> · The coverage amount will be calculated differently
                  based on the chosen coverage amount and duration.
                  <br />
                  <br /> ·&nbsp;
                  <div className="inline underline">
                    The insurance payout amount will vary based on the selected
                    decline rate.
                  </div>
                </div>
                <div className="p-6 flex justify-evenly gap-4">
                  <div className="border rounded-xl w-1/2">
                    <div className="text-xl flex justify-center pt-4">
                      <u>Coverage Period (days)</u>
                    </div>
                    <div className="flex mt-12 p-4 justify-center items-center">
                      <div className="rounded-3xl p-8 border-2 transition duration-300 bg-blue-100 border-blue-500 text-blue-600">
                        5 days
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 border rounded-xl">
                    <div className="text-xl flex justify-center pt-4">
                      <u>Coverage Request ID (LIDO)</u>
                    </div>
                    <div className="p-5 flex flex-col">
                      <div className="flex flex-col items-center gap-4 border rounded-xl h-36">
                        <div className="mt-1">
                          The requestId of your staking:
                        </div>
                        {myRequestId && (
                          <div className="gap-3 pb-4 grid grid-cols-5">
                            {myRequestId.map((v, i) => {
                              const handleClick = () => {
                                setRequestId([myRequestId[i]]);
                                setSelectedId(myRequestId[i]);
                              };

                              const buttonClassName =
                                selectedId === myRequestId[i]
                                  ? "bg-blue-100 border-blue-500 text-blue-600"
                                  : "";
                              return (
                                <div
                                  className={`text-xs p-1 border rounded-lg transition duration-300 hover:scale-95 hover:text-blue-600/50 hover:border-blue-500/50 hover:bg-blue-100/50  ${buttonClassName}`}
                                >
                                  <button onClick={handleClick}>
                                    {myRequestId[i]}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex">
                  <div className="border rounded-xl w-full">
                    <div className="text-xl flex justify-center pt-4">
                      <u>Coverage Ratio (%)</u>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-64 mt-4 flex items-center gap-8 mb-4">
                        <input
                          type="range"
                          min={10}
                          max={90}
                          step={1}
                          value={ratio}
                          onChange={handleChange}
                          className="h-5 bg-gray-300 rounded-full w-full outline-none"
                        />
                        <div className="text-center">{ratio}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mt-8 bg-white rounded-xl shadow-2xl h-full">
                <div className=" bg-white rounded-xl shadow-2xl h-full">
                  <div className="p-6 text-2xl flex items-center gap-2">
                    <div>
                      <GiConfirmed />
                    </div>
                    Terms and conditions
                  </div>
                  <div className="p-6 text-sm">
                    <div className="text-xl mb-2">1. Coverage Options</div>
                    &nbsp; &nbsp;1.1. You can choose between two coverage
                    options: 30 days and 365 days. The coverage period starts
                    from the date of purchase.
                    <br /> &nbsp; &nbsp;1.2. Please note that the fee rates may
                    vary depending on the chosen duration.
                    <br /> &nbsp; &nbsp;1.3. The coverage amount will be
                    calculated differently based on the chosen coverage amount
                    and duration.
                    <div className="text-xl mb-2 mt-2">
                      2. Coverage Eligibility
                    </div>
                    &nbsp; &nbsp;2.1. The coverage is available for holders of
                    the specified coin (to be determined).
                    <br /> &nbsp; &nbsp;2.2. You must hold the specified coin at
                    the time of purchase to be eligible for coverage.
                    <br /> <div className="text-xl mb-2 mt-2">
                      3. Payment
                    </div>{" "}
                    &nbsp; &nbsp;3.1. The payment currency for the coverage is
                    USDT.
                    <br /> &nbsp; &nbsp;3.2. The coverage amount must be paid in
                    full at the time of purchase.
                    <br />{" "}
                    <div className="text-xl mb-2 mt-2">4. Voting Rights</div>
                    &nbsp; &nbsp;4.1. By purchasing coverage, you will obtain
                    voting rights based on the final price of the specified
                    coin.
                    <br /> &nbsp; &nbsp;4.2. Voting rights will be allocated
                    proportionally to the coverage amount.
                    <br />{" "}
                    <div className="text-xl mb-2 mt-2">
                      5. NFT Issuance
                    </div>{" "}
                    &nbsp; &nbsp;5.1. Upon purchasing coverage, you will receive
                    a unique non-fungible token (NFT) as proof of coverage.
                    <br /> &nbsp; &nbsp;5.2. The NFT will be issued to the
                    wallet address used for the purchase.
                    <br />{" "}
                    <div className="text-xl mb-2 mt-2">6. Claim Process</div>
                    &nbsp; &nbsp;6.1. In the event of a valid claim, you must
                    follow the specified claim process provided separately.
                    <br /> &nbsp; &nbsp;6.2. Claims will be evaluated based on
                    the terms and conditions outlined in the claim process.
                    <br />
                    <div className="text-xl mb-2 mt-2">
                      7. Market Fluctuations
                    </div>
                    &nbsp; &nbsp;7.1. Please be aware that the final price of
                    the specified coin may vary due to market fluctuations.
                    <br /> &nbsp; &nbsp;7.2. INSURSAND does not guarantee any
                    specific outcome or returns from the coverage.
                    <br />{" "}
                    <div className="text-xl mb-2 mt-2">8. Disclaimer</div>{" "}
                    &nbsp; &nbsp;8.1. INSURSAND reserves the right to modify or
                    update these terms and conditions at any time.
                    <br /> &nbsp; &nbsp;8.2. By purchasing coverage, you agree
                    to comply with these terms and conditions.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-full top-10 sticky">
            <div className="mt-12 top-0 sticky bg-white rounded-xl shadow-2xl shadow-amber-800/80 flex flex-col">
              <div className="pl-6 pt-4 text-2xl flex items-center gap-2">
                <IoReaderOutline />
                Receipt
              </div>
              <div className="mx-8">
                <div className="border mt-4 rounded-xl">
                  <div className="p-4 font-bold">
                    <u>Request</u>
                  </div>
                  <div className="flex justify-between p-3 mx-8 text-sm">
                    <div>coverage period:</div>
                    <div className="font-bold">5 days</div>
                  </div>
                  <div className="flex justify-between p-3 mx-8 text-sm">
                    <div>coverage request ID:</div>
                    <div className="font-bold">{requestId}</div>
                  </div>
                  <div className="flex justify-between p-3 mx-8 text-sm">
                    <div>coverage amount:</div>
                    <div className="font-bold">{amount} ETH</div>
                  </div>
                  <div className="flex justify-between p-3 mx-8 text-sm">
                    <div>coverage ratio:</div>
                    <div className="font-bold">{ratio}%</div>
                  </div>
                </div>
                <div className="border mt-8 rounded-xl">
                  <div className="p-4 font-bold">
                    <u>Quote</u>
                  </div>
                  <div className="flex justify-between p-3 mx-8 text-sm">
                    <div>discount amount:</div>
                    <div className="font-bold">{discountAmount} ETH</div>
                  </div>
                  <div className="flex justify-between p-3 mx-8 text-sm">
                    <div>amount you'll pay:</div>
                    <div className="font-bold">{finalPrice[0]} ETH</div>
                  </div>
                  <div className="flex justify-between p-3 mx-8 text-sm">
                    <div>claimable amount:</div>
                    <div className="font-bold">{activePrice} USDT</div>
                  </div>
                  <div className="flex justify-between p-3 mx-8 text-sm">
                    <div>votes you'll receive:</div>
                    <div className="font-bold">{votes}</div>
                  </div>
                  <div className="flex-grow flex justify-between p-3 mx-8 text-sm">
                    <div>fee rate:</div>
                    <div className="flex font-bold">
                      <div>7.5% (total)</div>
                      <div className="mx-1"> | </div>
                      <div>1.5% (daily)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center mt-6">
                  {
                    <QuoteLido
                      finalPrice={finalPrice}
                      account={account}
                      amount={amount}
                      isChecked={isChecked}
                      requestId={requestId}
                      ratio={ratio}
                      ethPrice={ethPrice}
                      activePrice={activePrice}
                    />
                  }
                </div>
                <label
                  className={
                    "flex justify-center items-center gap-2 text-xs font-bold mb-6"
                  }
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  I have read and agreed to the terms and conditions.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLido;
