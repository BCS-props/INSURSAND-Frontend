import { useEffect, useRef, useState } from "react";
import { BsChevronCompactDown, BsDot } from "react-icons/bs";
import { useObserve } from "../hooks/observe";
import "animate.css";
import { useGet } from "../hooks/get";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Main = () => {
  const [showIcon, setShowIcon] = useState(false);

  const targetRef = useRef(null);

  const { isObserved, dom } = useObserve();
  const { getTotalCoverAmount, totalAmount } = useGet();

  useEffect(() => {
    setTimeout(() => {
      setShowIcon(true);
    }, 2000);
  }, []);

  useEffect(() => {
    getTotalCoverAmount();
  }, []);

  const handleIconClick = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex min-h-screen justify-center">
        <div className="relative w-full flex flex-col justify-between">
          <video
            src={`${process.env.PUBLIC_URL}/images/background.mp4`}
            autoPlay
            muted
            loop
            className="z-0 object-cover absolute opacity-100 inset-0 w-full h-full"
          />
          <div className="font-roboto text-6xl font-extrabold text-amber-900/60 z-10 mx-auto mt-32 text-center">
            <div className="animate__animated animate__zoomIn">
              Every moment in DeFi,
            </div>
            <div className="mt-12 animate__delay-1s animate__animated animate__zoomIn">
              Safe easy with INSURSAND
            </div>
          </div>
          {showIcon && (
            <div className="flex justify-center mb-20 animate__animated animate__bounce animate__infinite">
              <BsChevronCompactDown
                className="opacity-50"
                size={100}
                color="black"
                onClick={handleIconClick}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="bg-gradient-to-b from-amber-950 to-amber-600">
        <div className="min-h-screen flex z-0 relative" ref={targetRef}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/background_2.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: "0.4",
            }}
          />
          <div className="flex-grow px-40 pt-24 z-20">
            <div
              className={`text-6xl pt-20 flex justify-center text-white/80 font-roboto ${
                isObserved &&
                "animate__animated animate__fadeInUp animate__slow"
              }`}
              ref={dom}
            >
              about INSURSAND
            </div>
            <div className="flex justify-center mt-40">
              <div className="grid grid-cols-4 gap-12">
                <div
                  className={`bg-blue-400/40 flex flex-col rounded-3xl shadow-2xl ${
                    isObserved &&
                    "animate__animated animate__fadeInUp animate__slower"
                  }`}
                >
                  <div className="text-2xl mb-4 px-8 pt-4 flex text-blue-900/80">
                    <BiPlus className="mt-1" />
                    Supported
                    <br /> chains
                  </div>
                  <div className="flex flex-col justify-center items-center border-4 border-blue-900/40 border-dashed m-12 rounded-full">
                    <img
                      className="w-10 mt-20"
                      src={`${process.env.PUBLIC_URL}/images/eth_logo.png`}
                      alt="ETH"
                    ></img>
                    <div className="mt-2 mb-20 text-blue-900/80">ETH</div>
                  </div>
                </div>
                <div
                  className={`bg-blue-400/40 flex flex-col rounded-3xl shadow-2xl ${
                    isObserved &&
                    "animate__animated animate__fadeInUp animate__slower"
                  }`}
                >
                  <div className="text-2xl mb-4 px-8 pt-4 flex text-blue-900/80">
                    <BiPlus className="mt-1" />
                    Total coverage
                    <br /> amount
                  </div>
                  <div className="flex flex-col justify-center items-center border-4 border-blue-900/40 border-dashed m-12 rounded-full">
                    <div className="mt-20 mb-8 text-2xl text-blue-900/80">
                      {totalAmount}
                    </div>
                    <div className="mt-2 mb-20 text-blue-900/80">ETH</div>
                  </div>
                </div>
                <div
                  className={`bg-blue-400/40 flex flex-col rounded-3xl shadow-2xl ${
                    isObserved &&
                    "animate__animated animate__fadeInUp animate__slower"
                  }`}
                >
                  <div className="text-2xl mb-4 px-8 pt-4 flex text-blue-900/80">
                    <BiPlus className="mt-1" />
                    Supported insurance
                    <br /> types
                  </div>
                  <div className="flex flex-col justify-center items-center border-4 border-blue-900/40 border-dashed m-12 rounded-full">
                    <div className="mt-20 text-2xl flex items-center text-blue-900/80">
                      <BsDot />
                      Asset Cover
                    </div>
                    <div className="mt-2 mb-16 text-2xl flex text-blue-900/80">
                      <BsDot className="mt-1" />
                      Lock-up Period
                      <br /> Cover
                    </div>
                  </div>
                </div>
                <div
                  className={`bg-blue-400/40 flex flex-col rounded-3xl shadow-2xl ${
                    isObserved &&
                    "animate__animated animate__fadeInUp animate__slower"
                  }`}
                >
                  <div className="text-2xl mb-4 px-8 pt-4 flex text-blue-900/80">
                    <BiPlus className="mt-1" /> Types of coins for
                    <br /> insurance claim
                  </div>
                  <div className="flex flex-col justify-center items-center border-4 border-blue-900/40 border-dashed m-12 rounded-full">
                    <img
                      className="w-14 mt-20"
                      src={`${process.env.PUBLIC_URL}/images/usdt_logo.png`}
                      alt="USDT"
                    ></img>
                    <div className="mt-2 mb-20 text-blue-900/80">USDT</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-40 mb-20">
              <Link to="/covers">
                <button className="bg-white/80 px-24 py-8 text-2xl rounded-2xl shadow-2xl">
                  INSURSAND's Coverage Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
