import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NFT_ABI, NFT_CA } from "../web3.config";
import { apiKey } from "../App";
import Web3 from "web3";
import axios from "axios";

const NftDetail = ({ account }) => {
  const { tokenId } = useParams();
  const [tokenURIs, setTokenURIs] = useState(); // tokenURI 배열
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
      const response = await axios.get(tokenURIs[tokenId]);
      const metadata = response.data;
      updatedNfts.push({
        name: metadata.name,
        description: metadata.description,
        image: metadata.image,
        attributes: metadata.attributes,
      });

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
    <div className="min-h-screen bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20">
      <div className="mx-40 mt-20"></div>
    </div>
  );
};
export default NftDetail;
