import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NFT_ABI, NFT_CA } from "../web3.config";
import { apiKey } from "../App";
import Web3 from "web3";
import axios from "axios";

const NftDetail = ({ account }) => {
  const { tokenId } = useParams();
  const [tokenURIs, setTokenURIs] = useState([]); // tokenURI 배열
  const [totalCover, setTotalCover] = useState(0); // 총 커버 개수
  const [myNft, setMyNft] = useState([]); // 내 nft 데이터
  const [tokenIds, setTokenIds] = useState([]); // 가지고 있는 nft tokenId 배열
  const [nftData, setNftData] = useState([]); // nft 데이터 배열

  const [coverTerm, setCoverTerm] = useState();
  const [tokenType, setTokenType] = useState();
  const [ratio, setRatio] = useState();
  const [time, setTime] = useState();
  const [tokenPrice, setTokenPrice] = useState();
  const [coverAmount, setCoverAmount] = useState();
  const [isActive, setIsActive] = useState();

  const web3 = new Web3(`https://goerli.infura.io/v3/${apiKey}`);
  const NFT_contract = new web3.eth.Contract(NFT_ABI, NFT_CA);

  const getRealData = () => {
    if (nftData[0] === 0) {
      setCoverTerm(30);
    } else {
      setCoverTerm(365);
    }

    if (nftData[1] === 0) {
      setTokenType("WETH");
    } else if (nftData[2] === 1) {
      setTokenType("UNI");
    } else {
      setTokenType("LINK");
    }

    setRatio(nftData[2]);
  };

  const getNftData = async () => {
    try {
      var nftDatas = await NFT_contract.methods
        .getNFTDatas(tokenId, account)
        .call();
      setNftData(nftDatas);
    } catch (error) {
      console.log(error);
    }
  };

  const getTokenURI = async () => {
    try {
      var tokenURI = await NFT_contract.methods.getTokenURI(account).call();
      setTokenURIs(tokenURI);
      //   console.log(tokenURI);
    } catch (error) {
      console.log(error);
    }
  };

  const getTokenId = async () => {
    try {
      var tokenId = await NFT_contract.methods.getTokenId(account).call();
      setTokenIds(tokenId);
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
        const tokenIdss = tokenIds[i];

        updatedNfts.push({
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
          attributes: metadata.attributes,
          tokenId: tokenIdss,
        });
      }

      // setMyNft(updatedNfts);
      if (updatedNfts.length > 0) {
        setMyNft(updatedNfts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const getNftDatas = async () => {
  //   try {
  //     const updatedDatas = [];

  //     for (let i = 0; i < myNft.length; i++) {}
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getTotalCover();
    getNftData();
    getRealData();
    getTokenURI();
    getTokenId();
  }, []);

  useEffect(() => {
    getNftMetadata();
  }, [tokenId]);

  useEffect(() => {
    console.log(myNft);
  }, [myNft]);

  useEffect(() => {
    console.log(nftData);
  }, [nftData]);

  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-r from-amber-400/80 to-amber-600/80 pt-14 pb-20">
      <div className="mx-80 w-1/3 mt-20 min-h-screen bg-amber-500/30 rounded-xl shadow-2xl">
        <div className="flex flex-col">
          <div>
            {myNft.image || (
              <div className="">
                <img
                  src={myNft[0].image}
                  alt="NFT"
                  className="rounded-xl p-16"
                />
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <table className="border-separate divide-y ">
              <tr className="divide-x">
                <td className="p-4">Token Type</td>
                <td className="p-4">{tokenType}</td>
              </tr>
              <tr className="divide-x">
                <td className="p-4">Claimable Period</td>
                <td className="p-4">{coverTerm} days</td>
              </tr>
              <tr className="divide-x">
                <td className="p-4">Coverable Ratio</td>
                <td className="p-4">{ratio} %</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NftDetail;
