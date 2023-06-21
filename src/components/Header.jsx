import { Link } from "react-router-dom";
import { MetaMaskAvatar } from "react-metamask-avatar";

const Header = ({ account, setAccount }) => {
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
    <header>
      <nav className="bg-white px-4 py-2.5">
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
                      className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/covers"
                      className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100"
                    >
                      Buy Specialized Covers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/governance"
                      className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100"
                    >
                      Governance
                    </Link>
                  </li>
                  <li>
                    <Link className="block rounded-xl py-2 px-4 hover:bg-gray-100">
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
                      className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100"
                    >
                      Buy Specialized Covers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/governance"
                      className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100"
                    >
                      Governance
                    </Link>
                  </li>
                  <li>
                    <Link className="block rounded-xl py-2 px-4 hover:bg-gray-100">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center">
            {account ? (
              <div className="flex items-center">
                <div className="text-white bg-amber-700/80 rounded-xl p-2 items-center flex">
                  <MetaMaskAvatar address={account} size={24} />
                  <div className="ml-2">
                    {account.substring(0, 6)}....
                    {account.substring(account.length - 4)}
                  </div>
                </div>
                <Link to="/">
                  <button
                    className="p-2 ml-4 text-white bg-amber-700/80 hover:bg-amber-800/80 duration-200 rounded-xl"
                    onClick={onClickDisconnect}
                  >
                    disconnect
                  </button>
                </Link>
              </div>
            ) : (
              <button
                className="p-2 text-white bg-amber-700/80 hover:bg-amber-800/80 duration-200 rounded-xl"
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
