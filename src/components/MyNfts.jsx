import { useEffect, useState } from "react";
import { apiKey } from "../App";
import Web3 from "web3";
import { NFT_ABI, NFT_CA } from "../web3.config";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";

const MyNfts = ({ account }) => {
  const [coverTerm, setCoverTerm] = useState();
  const [tokenType, setTokenType] = useState();
  const [ratio, setRatio] = useState();
  const [time, setTime] = useState();
  const [tokenPrice, setTokenPrice] = useState();
  const [coverAmount, setCoverAmount] = useState();
  const [isActive, setIsActive] = useState();

  const [tokenURIs, setTokenURIs] = useState([]); // tokenURI 배열
  const [totalCover, setTotalCover] = useState(0); // 총 커버 개수
  const [myNft, setMyNft] = useState([]); // 내 nft 데이터
  const [tokenIds, setTokenIds] = useState([]); // 가지고 있는 nft tokenId 배열
  const [nftData, setNftData] = useState([]); // nft 데이터 배열
  const [realData, setRealData] = useState([]); // 진짜 데이터 배열

  const web3 = new Web3(window.ethereum);
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

  const getNftData = async () => {
    try {
      var updatedNfts = [];
      if (tokenIds.length >= 1) {
        for (let i = 0; i < tokenIds.length; i++) {
          const nftDatas = await NFT_contract.methods
            .getNFTDatas(tokenIds[i], account)
            .call();

          updatedNfts.push(nftDatas);
        }
        setNftData(updatedNfts);
      }
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
        const TokenId = tokenIds[i];

        updatedNfts.push({
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
          attributes: metadata.attributes,
          tokenId: TokenId,
        });
      }
      setMyNft(updatedNfts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNftMetadata();
    getNftData();
    console.log(tokenIds);
  }, [tokenIds]);

  useEffect(() => {
    // getNftMetadata();
    // getNftData();
    getTokenURI();
    getTokenId();
    getTotalCover();
  }, []);

  useEffect(() => {
    console.log(nftData);
  }, [nftData]);

  return (
    <div className="mt-8 ">
      <div className="text-3xl font-montserrat font-bold text-amber-900/80">
        My Cover NFT ({totalCover})
      </div>

      {myNft && (
        <div className="grid grid-cols-5 gap-12 ml-12 mr-12 mt-20 font-chakra">
          {myNft.map((v, i) => {
            const tokenId = v.tokenId;

            const onClickClaim = async () => {
              try {
                if (nftData[i][6] === true) {
                  const claim = await NFT_contract.methods
                    .claimCover(tokenId)
                    .send({
                      from: account,
                    });
                } else {
                  alert("completed claim");
                }
              } catch (error) {
                console.log(error);
              }
            };

            return (
              <div
                key={i}
                className="flex flex-col shadow-2xl shadow-orange-200"
              >
                {nftData && nftData[i]?.isActive ? (
                  // {nftData ? (
                  <div>
                    <div className="relative shadow-xl">
                      <img src={v.image} alt="NFT" className="rounded-t-xl" />
                      <div className="absolute inset-0 flex items-end mb-2 justify-center">
                        <div className="bg-white/50 rounded-xl text-black/80 hover:scale-95 hover:bg-white hover:text-black duration-300 py-2">
                          <button
                            className="text-lg px-4"
                            onClick={onClickClaim}
                          >
                            get Claim
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-b-xl">
                      <div className="font-display flex items-center gap-2 pt-4 px-2 font-medium text-black">
                        {v.name} #{v.tokenId}
                      </div>
                      <div className="text-sm px-2 pb-2">
                        Cover Type: {v.attributes[0].trait_type}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="relative shadow-xl  cursor-not-allowed">
                      <div className="absolute bg-black w-full h-full bg-opacity-50 rounded-xl flex justify-center items-center text-4xl font-bold">
                        <MdOutlineDoNotDisturbOn
                          size={70}
                          className="opacity-80 text-red-500/80"
                        />
                      </div>
                      <img src={v.image} alt="NFT" className="rounded-t-xl" />
                    </div>
                    <div className="bg-white rounded-b-xl">
                      <div className="font-display flex items-center gap-2 pt-4 px-2 font-medium text-black">
                        {v.name} #{v.tokenId}
                      </div>
                      <div className="text-sm px-2 pb-2">
                        Cover Type: {v.attributes[0].trait_type}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default MyNfts;
