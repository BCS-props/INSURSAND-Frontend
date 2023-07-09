import { Link } from "react-router-dom";
// import { MetaMaskAvatar } from "react-metamask-avatar";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { IoExit } from "react-icons/io5";
import { BiLink } from "react-icons/bi";
import { MdSpaceDashboard } from "react-icons/md";
import { useOnClick } from "../hooks/onClick";

const Header = ({ account, setAccount }) => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleCommunityClick = () => {
    setIsCommunityOpen((prev) => !prev);
  };

  const handleCommunityItemHover = () => {
    setIsCommunityOpen(true);
  };

  const handleCommunityLeave = () => {
    setIsCommunityOpen(false);
  };

  const handleWalletClick = () => {
    setIsWalletOpen((prev) => !prev);
  };

  const handleWalletItemHover = () => {
    setIsWalletOpen(true);
  };

  const handleWalletLeave = () => {
    setIsWalletOpen(false);
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsWalletOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // useEffect(() => {
  //   const handleOutsideClick = (e) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
  //       setIsCommunityOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  const onClickConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.log(error);

        alert("Failed to Metamask login.");
      }
    } else {
      alert("You must install Metamask.");
    }
  };

  const onClickDisconnect = async () => {
    try {
      setAccount("");
      setSelectedItem(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="fixed w-full z-50">
      <nav className="px-6 py-2.5 mx-2">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => handleItemClick(null)}
          >
            <div className="justify-between flex">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="logo"
                className="w-28"
              />
            </div>
          </Link>
          <div className="p-2 flex">
            <div className="justify-between items-center w-full text-sm font-light">
              <ul className="flex flex-row">
                <li>
                  <Link
                    to="/covers"
                    className={`block rounded-xl py-2 px-4 mr-2 ${
                      selectedItem === 0
                        ? "text-amber-600"
                        : "hover:text-amber-600"
                    }`}
                    onClick={() => handleItemClick(0)}
                  >
                    Buy Cover
                  </Link>
                </li>
                <li>
                  <Link
                    to="/governance"
                    className={`block rounded-xl py-2 px-4 mr-2 ${
                      selectedItem === 1
                        ? "text-amber-600"
                        : "hover:text-amber-600"
                    }`}
                    onClick={() => handleItemClick(1)}
                  >
                    Governance
                  </Link>
                </li>
                <li
                  className="relative block rounded-xl py-2 px-4 hover:text-amber-600 cursor-pointer"
                  onMouseEnter={handleCommunityItemHover}
                  onMouseLeave={handleCommunityLeave}
                  onClick={handleCommunityClick}
                >
                  Community
                  {isCommunityOpen && (
                    <div className="animate-fade-down animate-once absolute top-4 text-black border border-amber-600 duration-200 flex flex-col p-2 mt-4 gap-1 divide-amber-600">
                      <a
                        href="https://discord.gg/h4QwrSfA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-600 pb-1 pr-4"
                      >
                        <div className="flex items-center gap-1">
                          <BsDiscord />
                          Discord
                        </div>
                      </a>
                      <a
                        href="https://twitter.com/example"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-600 pt-1 pr-4"
                      >
                        <div className="flex items-center gap-1">
                          <BsTwitter />
                          Twitter
                        </div>
                      </a>
                    </div>
                  )}
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className={`block rounded-xl py-2 px-4 ${
                      selectedItem === 2
                        ? "text-amber-600"
                        : "hover:text-amber-600"
                    }`}
                    onClick={() => handleItemClick(2)}
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            {account ? (
              <div
                className="flex items-center justify-end"
                onMouseEnter={handleWalletItemHover}
                onMouseLeave={handleWalletLeave}
                onClick={handleWalletClick}
              >
                <button className="text-amber-600 border border-amber-600 hover:border-amber-800 hover:text-amber-800 duration-200 rounded-xl p-2 items-center flex">
                  {/* <MetaMaskAvatar address={account} size={24} /> */}
                  <div className="ml-2">
                    <div className="flex items-center gap-4">
                      {account.substring(0, 6)}....
                      {account.substring(account.length - 4)}
                      {!isWalletOpen ? (
                        <AiOutlineCaretDown />
                      ) : (
                        <AiOutlineCaretUp />
                      )}
                    </div>
                  </div>
                </button>
                {isWalletOpen && (
                  <div
                    ref={dropdownRef}
                    className="animate-fade-down animate-once absolute top-14 text-black border border-amber-600 duration-200 flex flex-col rounded-lg p-2 mt-3 gap-1"
                  >
                    <Link to="/dashboard">
                      <button
                        className="hover:text-amber-600 pb-1 flex items-center gap-1"
                        onClick={() => setSelectedItem(null)}
                      >
                        <MdSpaceDashboard />
                        Dashboard
                      </button>
                    </Link>
                    <Link
                      to={`https://goerli.etherscan.io/address/${account}`}
                      target="_blank"
                    >
                      <button
                        className="hover:text-amber-600 py-1 flex items-center gap-1"
                        onClick={() => setSelectedItem(null)}
                      >
                        <BiLink />
                        Open in Etherscan
                      </button>
                    </Link>
                    <Link to="/">
                      <button
                        className="hover:text-amber-600 justify-start items-center flex pt-1 gap-1"
                        onClick={onClickDisconnect}
                      >
                        <IoExit />
                        Disconnect
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="p-2 text-amber-600 border border-amber-600 hover:border-amber-800 hover:text-amber-800 duration-200 rounded-xl animate-delay-300"
                onClick={onClickConnect}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
