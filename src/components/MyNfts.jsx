import { useEffect, useState } from "react";
import { useGet } from "../hooks/get";
import { apiKey } from "../App";
import Web3 from "web3";
import { NFT_ABI, NFT_CA } from "../web3.config";
import axios from "axios";
import { Link } from "react-router-dom";

const MyNfts = ({ account }) => {
  //   const { getTokenURI, tokenURIs, getTotalCover, totalCover } = useGet();
  const [tokenURIs, setTokenURIs] = useState([]); // tokenURI 배열
  const [totalCover, setTotalCover] = useState(0); // 총 커버 개수
  const [myNft, setMyNft] = useState([]); // 내 nft 데이터

  const web3 = new Web3(`https://goerli.infura.io/v3/${apiKey}`);
  const NFT_contract = new web3.eth.Contract(NFT_ABI, NFT_CA);

  const getTokenURI = async () => {
    try {
      var tokenURI = await NFT_contract.methods.getTokenURI(account).call();
      setTokenURIs(tokenURI);
      //   console.log(tokenURI);
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalCover = async () => {
    try {
      var totalCovers = await NFT_contract.methods.balanceOf(account).call();
      setTotalCover(Number(totalCovers));
    } catch (error) {
      console.log(error);
    }
  };

  const getNftMetadata = async () => {
    try {
      const updatedNfts = [];

      for (let i = 0; i < tokenURIs.length; i++) {
        const response = await axios.get(tokenURIs[i]);
        const metadata = response.data;

        updatedNfts.push({
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
          attributes: metadata.attributes,
        });
      }

      setMyNft(updatedNfts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTokenURI();
    getTotalCover();
  }, []);

  useEffect(() => {
    getNftMetadata();
    console.log(myNft);
  }, [tokenURIs]);

  return (
    <div className="mt-8 ">
      <div className="text-3xl font-montserrat font-bold text-amber-900/80">
        My Cover NFT ({totalCover})
      </div>

      {myNft && (
        <div className="grid grid-cols-5 gap-12 ml-12 mr-12 mt-20">
          {myNft.map((v, i) => {
            return (
              <div key={i}>
                <img
                  src={v.image}
                  alt="NFT"
                  className="rounded-t-xl shadow-xl"
                />
                <div className="relative bg-slate-100 rounded-b-xl w-full font-roboto">
                  <div className="font-display flex items-center gap-2 pt-4 px-2 font-light text-black">
                    {v.name} #{v.tokenId}
                  </div>
                  <div className="text-sm font-display px-2 pb-2">
                    Type: {v.attributes[0].trait_type}
                  </div>
                  <div>
                    <button className="flex justify-center">claim</button>
                  </div>
                  <Link to={`/detail/${v.tokenId}`}>
                    <button className="absolute top-0 right-1 font-display text-2xl">
                      ⋮
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default MyNfts;
