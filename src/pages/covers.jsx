import Web3 from "web3";
import { NFT_ABI, NFT_CA } from "../web3.config";
import { apiKey } from "../App";
import { GiSandsOfTime } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const web3 = new Web3(window.ethereum);
export const NFT_contract = new web3.eth.Contract(NFT_ABI, NFT_CA);

const Covers = ({ account }) => {
  async function NFT_minting(e) {
    e.preventDefault();
    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: account,
          data: NFT_contract.methods.Mint_Cover().encodeABI(),
        },
      ],
    });
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20">
      <div className="flex justify-center items-center gap-40 mt-20 text-lg pb-20">
        <button className="border bg-white opacity-70 rounded-md p-8">
          Required documents
        </button>
        <button className="border bg-white opacity-70 rounded-md p-8">
          How to buy coverage
        </button>
        <button className="border bg-white opacity-70 rounded-md p-8">
          How to make a claim
        </button>
      </div>
      <div className="" style={{ height: "560px" }}>
        <div className="flex h-full px-60 gap-20">
          <div className="border rounded-xl flex-1 h-full bg-gray-100 opacity-80">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 pt-4 px-4 text-xl">
                <IoShieldCheckmarkOutline />
                Value Drop Coverage
              </div>
              <button className="flex mx-auto mt-96  items-center border border-black text-2xl p-2 rounded-2xl">
                <Link to={`/covers/coindrop`}>Get quote</Link>
              </button>
            </div>
          </div>
          <div className="border rounded-xl flex-1 h-full bg-gray-100 opacity-80">
            <div>
              <div className="flex items-center gap-2 pt-4 px-4 text-xl">
                <GiSandsOfTime />
                Value Drop Coverage during lockup period
              </div>
              <button className="flex mx-auto mt-96 items-center border border-black text-2xl p-2 rounded-2xl">
                <Link to={`/covers/2`}>Get quote</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Covers;
