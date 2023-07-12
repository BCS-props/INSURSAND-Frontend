import Web3 from "web3";
import {
  BALANCE_ABI,
  BALANCE_CA,
  ERC20_ABI,
  ERC20_CA,
  NFT_ABI,
  NFT_CA,
} from "../web3.config";
import { HiLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";
import { BsGraphDownArrow, BsShieldCheck } from "react-icons/bs";
import { useEffect } from "react";

const web3 = new Web3(window.ethereum);
export const NFT_contract = new web3.eth.Contract(NFT_ABI, NFT_CA);
export const ERC20_contract = new web3.eth.Contract(ERC20_ABI, ERC20_CA);
export const BALANCE_contract = new web3.eth.Contract(BALANCE_ABI, BALANCE_CA);

const Covers = () => {
  console.log(window.ethereum.isConnected());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20">
      <div className="flex justify-center items-center gap-40 mt-20 text-lg pb-20 font-nunito">
        <a
          href="https://drive.google.com/file/d/1_9AIlKnnils8CIjbr2Jlbjj5tXuURmGx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-amber-700/40 rounded-md p-8 text-white/80 shadow-xl hover:scale-95 duration-300 hover:bg-amber-700/70">
            <div className="hover:animate-pulse hover:animate-once">
              Required documents
            </div>
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1TofVhqCEqtqdmrKiH0CkAeI9tlitoCMb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-amber-800/50 rounded-md p-8 text-white/80 shadow-xl hover:scale-95 duration-300 hover:bg-amber-800/70">
            <div className="hover:animate-pulse hover:animate-once">
              How to buy coverage
            </div>
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1_lgB9Yh-rCm3MujRWpOrcWnSMWRj5clX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-amber-900/60 rounded-md p-8 text-white/80 shadow-xl hover:scale-95 duration-300 hover:bg-amber-900/70">
            <div className="hover:animate-pulse hover:animate-once">
              How to make a claim
            </div>
          </button>
        </a>
      </div>
      <div className="">
        <div className="grid grid-cols-4 px-12 gap-12 items-center justify-center font-nunito">
          <div className="border rounded-xl bg-amber-100/80 shadow-2xl shadow-amber-700 hover:bg-amber-100/90 duration-500 hover:scale-105">
            <div className="flex flex-col">
              <div className="flex ml-4 mt-4 gap-8">
                <div className="w-fit">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt="logo"
                    className="w-24"
                  />
                </div>
                <div className="">
                  <div className="font-bold text-lg">INSURSAND</div>
                  <div className="flex items-center gap-2 text-amber-800/80">
                    <BsShieldCheck className="" />
                    Asset Insurance
                  </div>
                </div>
              </div>
              <div className="border-2 rounded-xl mx-2 my-4 text-sm border-white/60">
                <div className="mt-12 mx-12 flex justify-between">
                  <div>Type: </div>
                  <div className="flex items-center gap-1">
                    <BsGraphDownArrow />
                    Asset Insur.
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Covered Token: </div>
                  <div className="flex gap-1">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/weth_logo.png`}
                      alt="weth"
                      className="w-8  items-start"
                    />
                    <div className="flex items-center">WETH</div>
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Chains: </div>
                  <div>
                    <FaEthereum size={20} />
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Period: </div>
                  <div>30days / 365days</div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Ratio: </div>
                  <div>10% ~ 90%</div>
                </div>
                <div className="mt-8 mb-12 mx-12 flex justify-between">
                  <div>Votes: </div>
                  <div>1(min) ~ 3(max)</div>
                </div>
              </div>
              <button className="flex mt-4 mx-auto mb-4 items-center border border-green-700 text-2xl text-green-700 hover:bg-green-600/30 hover:border-green-800 hover:text-green-900 duration-300 p-2 rounded-2xl">
                <Link to={`/covers/weth`}>Get Quote</Link>
              </button>
            </div>
          </div>
          <div className="border rounded-xl bg-amber-100/80 shadow-2xl shadow-amber-700 hover:bg-amber-100/90 duration-500 hover:scale-105">
            <div className="flex flex-col">
              <div className="flex ml-4 mt-4 gap-8">
                <div className="w-fit">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt="logo"
                    className="w-24"
                  />
                </div>
                <div className="">
                  <div className="font-bold text-lg">INSURSAND</div>
                  <div className="flex items-center gap-2 text-amber-800/80">
                    <BsShieldCheck className="" />
                    Asset Insurance
                  </div>
                </div>
              </div>
              <div className="border-2 rounded-xl mx-2 my-4 text-sm border-white/60">
                <div className="mt-12 mx-12 flex justify-between">
                  <div>Type: </div>
                  <div className="flex items-center gap-1">
                    <BsGraphDownArrow />
                    Asset Insur.
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Covered Token: </div>
                  <div className="flex gap-1">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/uniswap_logo.png`}
                      alt="uni"
                      className="w-8 flex items-start"
                    />
                    <div className="flex items-center">UNI</div>
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Chains: </div>
                  <div>
                    <FaEthereum size={20} />
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Period: </div>
                  <div>30days / 365days</div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Ratio: </div>
                  <div>10% ~ 90%</div>
                </div>
                <div className="mt-8 mb-12 mx-12 flex justify-between">
                  <div>Votes: </div>
                  <div>1(min) ~ 3(max)</div>
                </div>
              </div>
              <button className="flex mt-4 mx-auto mb-4 items-center border border-green-700 text-2xl text-green-700 hover:bg-green-600/30 hover:border-green-800 hover:text-green-900 duration-300 p-2 rounded-2xl">
                <Link to={`/covers/uni`}>Get Quote</Link>
              </button>
            </div>
          </div>
          <div className="border rounded-xl bg-amber-100/80 shadow-2xl shadow-amber-700 hover:bg-amber-100/90 duration-500 hover:scale-105">
            <div className="flex flex-col">
              <div className="flex ml-4 mt-4 gap-8">
                <div className="w-fit">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt="logo"
                    className="w-24"
                  />
                </div>
                <div className="">
                  <div className="font-bold text-lg">INSURSAND</div>
                  <div className="flex items-center gap-2 text-amber-800/80">
                    <BsShieldCheck className="" />
                    Asset Insurance
                  </div>
                </div>
              </div>
              <div className="border-2 rounded-xl mx-2 my-4 text-sm border-white/60">
                <div className="mt-12 mx-12 flex justify-between">
                  <div>Type: </div>
                  <div className="flex items-center gap-1">
                    <BsGraphDownArrow />
                    Asset Insur.
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Covered Token: </div>
                  <div className="flex gap-1">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/link_logo.png`}
                      alt="link"
                      className="w-8 flex items-start"
                    />
                    <div className="flex items-center">LINK</div>
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Chains: </div>
                  <div>
                    <FaEthereum size={20} />
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Period: </div>
                  <div>30days / 365days</div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Ratio: </div>
                  <div>10% ~ 90%</div>
                </div>
                <div className="mt-8 mb-12 mx-12 flex justify-between">
                  <div>Votes: </div>
                  <div>1(min) ~ 3(max)</div>
                </div>
              </div>
              <button className="flex mt-4 mx-auto mb-4 items-center border border-green-700 text-2xl text-green-700 hover:bg-green-600/30 hover:border-green-800 hover:text-green-900 duration-300 p-2 rounded-2xl">
                <Link to={`/covers/link`}>Get Quote</Link>
              </button>
            </div>
          </div>
          <div className="border rounded-xl bg-indigo-100/80 shadow-2xl shadow-amber-700 hover:bg-indigo-100/90 duration-500 hover:scale-105">
            <div className="flex flex-col">
              <div className="flex ml-4 mt-4 gap-8">
                <div className="w-fit">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt="logo"
                    className="w-24"
                  />
                </div>
                <div className="">
                  <div className="font-bold text-lg">INSURSAND</div>
                  <div className="flex items-center gap-2 text-amber-800/80">
                    <HiLockClosed />
                    Lock-up Insur.
                  </div>
                </div>
              </div>
              <div className="border-2 rounded-xl mx-2 my-4 text-sm border-white/60">
                <div className="mt-12 mx-12 flex justify-between">
                  <div>Type: </div>
                  <div className="flex items-center gap-1">
                    <BsGraphDownArrow />
                    Lock-up Insur.
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Staking Service: </div>
                  <div className="flex items-center gap-1">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/lido_logo.png`}
                      alt="uni"
                      className="w-8"
                    />
                    LIDO
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Chains: </div>
                  <div>
                    <FaEthereum size={20} />
                  </div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Period: </div>
                  <div>5 days</div>
                </div>
                <div className="mt-8 mx-12 flex justify-between">
                  <div>Ratio: </div>
                  <div>10% ~ 90%</div>
                </div>
                <div className="mt-8 mb-12 mx-12 flex justify-between">
                  <div>Votes: </div>
                  <div>1(min) ~ 3(max)</div>
                </div>
              </div>
              <button className="flex mt-4 mx-auto mb-4 items-center border border-green-700 text-2xl text-green-700 hover:bg-green-600/30 hover:border-green-800 hover:text-green-900 duration-300 p-2 rounded-2xl">
                <Link to={`/covers/lido`}>Get Quote</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covers;
