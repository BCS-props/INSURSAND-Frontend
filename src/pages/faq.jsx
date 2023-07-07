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

  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20">
      <div className="mx-40 mt-20">
        <div className="flex flex-col justify-center gap-2">
          <div className="flex justify-center text-4xl">FAQ</div>
          <div className="flex justify-center text-xl">
            Frequently Asked Questions
          </div>
        </div>
        <div className="grid-cols-2 grid gap-14 rounded-2xl mt-8 p-4 bg-white/40">
          <div className="">
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-center items-center gap-2"
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
                    1. INSURSAND is a project that shares the risk of DeFi.
                  </li>
                  <li className="flex mt-2">
                    2. A total of two products are provided, and a simple
                    insurance contract and easy insurance claim function are
                    provided at the same time.
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-center items-center gap-2"
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
                    1. Asset Insurance(When the value of a coin drops.)
                  </li>
                  <li className="flex mt-2">
                    2. Unstaking Lockup Insurance(When the price drops during
                    the lock-up period after unstaking.)
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-center items-center gap-2"
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
                  <li className="flex">1. 두 가지 상품 설명</li>
                  <li className="flex mt-2">
                    2. After the INSURSAND insurance contract is concluded, if
                    either of ther above two matters is applicable, the
                    insurance claim can be made immediately.
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div
              className="text-amber-800 text-2xl cursor-pointer flex justify-center items-center gap-2"
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
                  <li className="flex">1. 두 가지 상품 설명</li>
                  <li className="flex mt-2">
                    2. After the INSURSAND insurance contract is concluded, if
                    either of ther above two matters is applicable, the
                    insurance claim can be made immediately.
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
