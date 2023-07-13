import { useState } from "react";
import { FaMountain } from "react-icons/fa";
import { HiArrowDown, HiArrowNarrowUp } from "react-icons/hi";

const FAQ = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [iconReverse, setIconReverse] = useState(false);
  const [isTextVisible2, setIsTextVisible2] = useState(false);
  const [iconReverse2, setIconReverse2] = useState(false);
  const [isTextVisible3, setIsTextVisible3] = useState(false);
  const [iconReverse3, setIconReverse3] = useState(false);
  const [isTextVisible4, setIsTextVisible4] = useState(false);
  const [iconReverse4, setIconReverse4] = useState(false);
  const [isTextVisible5, setIsTextVisible5] = useState(false);
  const [iconReverse5, setIconReverse5] = useState(false);
  const [isTextVisible6, setIsTextVisible6] = useState(false);
  const [iconReverse6, setIconReverse6] = useState(false);
  const [isTextVisible7, setIsTextVisible7] = useState(false);
  const [iconReverse7, setIconReverse7] = useState(false);
  const [isTextVisible8, setIsTextVisible8] = useState(false);
  const [iconReverse8, setIconReverse8] = useState(false);
  const [isTextVisible9, setIsTextVisible9] = useState(false);
  const [iconReverse9, setIconReverse9] = useState(false);
  const [isTextVisible10, setIsTextVisible10] = useState(false);
  const [iconReverse10, setIconReverse10] = useState(false);

  const handleTextClick = () => {
    setIsTextVisible(!isTextVisible);
    setIconReverse(!iconReverse);
  };

  const handleTextClick2 = () => {
    setIsTextVisible2(!isTextVisible2);
    setIconReverse2(!iconReverse2);
  };
  const handleTextClick3 = () => {
    setIsTextVisible3(!isTextVisible3);
    setIconReverse3(!iconReverse3);
  };
  const handleTextClick4 = () => {
    setIsTextVisible4(!isTextVisible4);
    setIconReverse4(!iconReverse4);
  };
  const handleTextClick5 = () => {
    setIsTextVisible5(!isTextVisible5);
    setIconReverse5(!iconReverse5);
  };
  const handleTextClick6 = () => {
    setIsTextVisible6(!isTextVisible6);
    setIconReverse6(!iconReverse6);
  };
  const handleTextClick7 = () => {
    setIsTextVisible7(!isTextVisible7);
    setIconReverse7(!iconReverse7);
  };
  const handleTextClick8 = () => {
    setIsTextVisible8(!isTextVisible8);
    setIconReverse8(!iconReverse8);
  };
  const handleTextClick9 = () => {
    setIsTextVisible9(!isTextVisible9);
    setIconReverse9(!iconReverse9);
  };
  const handleTextClick10 = () => {
    setIsTextVisible10(!isTextVisible10);
    setIconReverse10(!iconReverse10);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20 font-cairo">
      <div className="mx-40 mt-20">
        <div className="flex flex-col justify-center gap-2">
          <div className="flex justify-center text-4xl">FAQ</div>
          <div className="flex justify-center text-xl">
            Frequently Asked Questions
          </div>
        </div>
        <div className="grid-cols grid gap-12 pr-12 rounded-2xl mt-8 p-20 bg-white/40">
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-start items-center gap-2"
              onClick={handleTextClick}
            >
              <FaMountain />
              What is INSURSAND?
              {iconReverse ? (
                <div>
                  <HiArrowNarrowUp />
                </div>
              ) : (
                <div>
                  <HiArrowDown />
                </div>
              )}
            </div>
            {isTextVisible && (
              <div className="mt-2 text-gray-600 animate-fade-down animate-once animate-duration-500 p-4 rounded-xl">
                <ul className="">
                  <li className="flex">
                    · INSURSAND is a project that shares the risk of DeFi.
                  </li>
                  <li className="flex mt-2">
                    · A total of two products are provided, and a simple
                    insurance contract and easy insurance claim function are
                    provided at the same time.
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-start items-center gap-2"
              onClick={handleTextClick2}
            >
              <FaMountain />
              What risk do you cover?
              {iconReverse2 ? (
                <div>
                  <HiArrowNarrowUp />
                </div>
              ) : (
                <div>
                  <HiArrowDown />
                </div>
              )}
            </div>
            {isTextVisible2 && (
              <div className="mt-2 text-gray-600 p-4 rounded-xl ">
                <ul className="animate-fade-down animate-once animate-duration-500">
                  <li className="flex">
                    · Asset Insurance (When the value of a coin drops)
                  </li>
                  <li className="flex mt-2">
                    · Unstaking Insurance (If the price of the token decreases
                    during the withdrawal waiting period after unstaking)
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-start items-center gap-2"
              onClick={handleTextClick3}
            >
              <FaMountain />
              What loss events are covered?
              {iconReverse3 ? (
                <div>
                  <HiArrowNarrowUp />
                </div>
              ) : (
                <div>
                  <HiArrowDown />
                </div>
              )}
            </div>
            {isTextVisible3 && (
              <div className="mt-2 text-gray-600 p-4 rounded-xl ">
                <ul className=" animate-fade-down animate-once animate-duration-500">
                  <li className="flex">
                    · Asset Insurance - The purchased contract is covered when
                    the price drops to a certain level
                  </li>
                  <li className="flex mt-2">
                    · Unstaking Insurance - Covers when the price drops during
                    the withdrawal waiting period after unstaking.
                  </li>
                  <li className="flex mt-2">
                    · After the INSURSAND insurance contract is concluded, if
                    either of ther above two matters is applicable, the
                    insurance claim can be made immediately.
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-start items-center gap-2"
              onClick={handleTextClick4}
            >
              <FaMountain />
              What is the process?
              {iconReverse4 ? (
                <div>
                  <HiArrowNarrowUp />
                </div>
              ) : (
                <div>
                  <HiArrowDown />
                </div>
              )}
            </div>
            {isTextVisible4 && (
              <div className="mt-2 text-gray-600 p-4 rounded-xl ">
                <ul className=" animate-fade-down animate-once animate-duration-500">
                  <li className="flex">
                    · Choose one of the insurances you want covered.
                  </li>
                  <li className="flex mt-2">
                    · When signing insurance, INSURSAND will mint NFTs.
                  </li>
                  <li className="flex mt-2">
                    · During the insurance contract period, when the insurance
                    you selected becomes claimable, prepare the necessary
                    documents and apply for insurance money on the official
                    website of INSURSAND. (At this time, the NFT must be
                    possessed unconditionally.)
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-start items-center gap-2"
              onClick={handleTextClick5}
            >
              <FaMountain />
              How does the claim process work?
              {iconReverse5 ? (
                <div>
                  <HiArrowNarrowUp />
                </div>
              ) : (
                <div>
                  <HiArrowDown />
                </div>
              )}
            </div>
            {isTextVisible5 && (
              <div className="mt-2 text-gray-600 p-4 rounded-xl ">
                <ul className=" animate-fade-down animate-once animate-duration-500">
                  <li className="flex">
                    · INSURSAND pays NFT at the same time as signing an
                    insurance contract.
                  </li>
                  <li className="flex mt-2">
                    · When filing a compensation claim, it is necessary to
                    possess the relevant NFT. The claim conditions are
                    automatically verified through the smart contract, and if
                    the conditions are met, the insurance payout will be made
                    promptly.
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-start gap-2"
              onClick={handleTextClick7}
            >
              <FaMountain className="mt-1" />
              In which token is the insurance money paid?
              {iconReverse7 ? (
                <div className="flex items-center">
                  <HiArrowNarrowUp />
                </div>
              ) : (
                <div className="flex items-center">
                  <HiArrowDown />
                </div>
              )}
            </div>
            {isTextVisible7 && (
              <div className="mt-2 text-gray-600 p-4 rounded-xl ">
                <ul className=" animate-fade-down animate-once animate-duration-500">
                  <li className="flex">
                    · We support payment and payouts using the stablecoin USDT.
                    In the future, we plan to expand our support to include
                    various other stablecoins such as USDC, BUSD, DAI, and more.
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-start gap-2"
              onClick={handleTextClick8}
            >
              <FaMountain className="mt-1" />
              Can I trade the received NFT after the insurance contract?
              {iconReverse8 ? (
                <div className="flex items-center">
                  <HiArrowNarrowUp />
                </div>
              ) : (
                <div className="flex items-center">
                  <HiArrowDown />
                </div>
              )}
            </div>
            {isTextVisible8 && (
              <div className=" text-gray-600 p-4 rounded-xl ">
                <ul className=" animate-fade-down animate-once animate-duration-500">
                  <li className="flex">
                    · Certainly! You can trade the received NFT on NFT
                    marketplaces like OpenSea and Rarible at any time. However,
                    please keep in mind that the ownership of the NFT represents
                    the right to claim insurance payout. If you sell the NFT to
                    someone else, you will no longer be eligible to claim the
                    insurance payout.
                  </li>
                  <li className="flex mt-2">· The choice is yours.</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-start gap-2"
              onClick={handleTextClick9}
            >
              <FaMountain className="mt-1" />
              How does INSURSAND's operating funds work?
              {iconReverse9 ? (
                <div className="flex items-center">
                  <HiArrowNarrowUp />
                </div>
              ) : (
                <div className="flex items-center">
                  <HiArrowDown />
                </div>
              )}
            </div>
            {isTextVisible9 && (
              <div className="mt-2 text-gray-600 p-4 rounded-xl ">
                <ul className=" animate-fade-down animate-once animate-duration-500">
                  <li className="flex">
                    · When signing an insurance contract, a portion of the cost
                    purchased by the user goes into the INSURSAND pool. It also
                    opens up governance over operational funds, resulting in
                    better fund utilization.
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-start gap-2"
              onClick={handleTextClick10}
            >
              <FaMountain className="mt-1 " />
              How can I get involved in INSURSAND governance?
              {iconReverse10 ? (
                <div className="flex items-center">
                  <HiArrowNarrowUp />
                </div>
              ) : (
                <div className="flex items-center">
                  <HiArrowDown />
                </div>
              )}
            </div>
            {isTextVisible10 && (
              <div className="mt-2 text-gray-600 p-4 rounded-xl ">
                <ul className=" animate-fade-down animate-once animate-duration-500">
                  <li className="flex">
                    · Once you purchase insurance, voting rights will be
                    distributed based on the amount of insurance purchased. You
                    can use these voting rights to participate in governance
                    proposals and voting processes.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
