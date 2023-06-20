import Web3 from "web3";
import { NFT_ABI, NFT_CA } from "../web3.config";

const Covers = ({ account, apiKey }) => {
  const web3 = new Web3(
    "https://sepolia.infura.io/v3/4bc46d21f741449c981aa74ba6d10b1d"
  );

  const NFT_contract = new web3.eth.Contract(NFT_ABI, NFT_CA);

  async function NFT_minting(e) {
    e.preventDefault();
    await window.ethereum.request({
      method: "eth_sendTransaction",
      paras: [
        {
          from: account,
          to: NFT_CA,
          data: NFT_contract.methods.MintCover(),
        },
      ],
    });
  }
  return (
    <div className="min-h-screen justify-center flex">
      <div className="mt-32">
        <form onSubmit={NFT_minting}>
          <button type="submit" className="border-2 p-2 rounded-xl bg-red-200">
            NFT Minting
          </button>
        </form>
      </div>
    </div>
  );
};

export default Covers;
