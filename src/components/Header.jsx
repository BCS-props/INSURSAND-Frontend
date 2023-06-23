import { Link } from "react-router-dom";
import { MetaMaskAvatar } from "react-metamask-avatar";
import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Header = ({ account, setAccount }) => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsOpen(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsOpen(false);
  // };

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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="absolute w-full z-20">
      <nav className="px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <div className="justify-between flex">
              {/* <div className="mr-3 h-6">logo img</div> */}
              <span class="self-center text-xl font-semibold">INSURSAND</span>
            </div>
          </Link>
          <div className="p-2 flex">
            {account ? (
              <div className="justify-between items-center w-full text-sm font-light">
                <ul className="flex flex-row">
                  <li>
                    <Link
                      to="/dashboard"
                      className="block rounded-xl py-2 px-4 mr-2 hover:text-amber-600"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/covers"
                      className="block rounded-xl py-2 px-4 mr-2 hover:text-amber-600"
                    >
                      Buy Specialized Covers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/governance"
                      className="block rounded-xl py-2 px-4 mr-2 hover:text-amber-600"
                    >
                      Governance
                    </Link>
                  </li>
                  <li>
                    <Link className="block rounded-xl py-2 px-4 hover:text-amber-600">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="justify-between items-center w-full text-sm font-light">
                <ul className="flex flex-row">
                  <li>
                    <Link
                      to="/covers"
                      className="block rounded-xl py-2 px-4 mr-2 hover:text-amber-600"
                    >
                      Buy Specialized Covers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/governance"
                      className="block rounded-xl py-2 px-4 mr-2 hover:text-amber-600"
                    >
                      Governance
                    </Link>
                  </li>
                  <li>
                    <Link className="block rounded-xl py-2 px-4 hover:text-amber-600">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center">
            {account ? (
              <div className="flex items-center justify-end">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="text-amber-600 border border-amber-600 hover:border-amber-800 hover:text-amber-800 duration-200 rounded-xl p-2 items-center flex"
                >
                  <MetaMaskAvatar address={account} size={24} />
                  <div className="ml-2">
                    <div className="flex items-center gap-4">
                      {account.substring(0, 6)}....
                      {account.substring(account.length - 4)}
                      {!isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
                    </div>
                  </div>
                </button>
                {isOpen && (
                  <div className="absolute top-14 text-black border border-amber-600 duration-200 flex flex-col rounded-lg p-2 mt-2 gap-2">
                    <Link
                      to={`https://goerli.etherscan.io/address/${account}`}
                      target="_blank"
                    >
                      <button className="hover:text-amber-600 border-b border-amber-600 pb-2">
                        Open in Etherscan
                      </button>
                    </Link>
                    <button
                      className="hover:text-amber-600"
                      onClick={onClickDisconnect}
                    >
                      Disconnect
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="p-2 text-amber-600 border border-amber-600 hover:border-amber-800 hover:text-amber-800 duration-200 rounded-xl"
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
