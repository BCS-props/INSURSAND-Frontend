import { Link } from "react-router-dom";

const Header = ({ account, setAccount }) => {
  const onClickConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("success login");
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
          <Link className="flex items-center" to="/">
            <div className="justify-between flex">
              <div className="mr-3 h-6">logo img</div>
              <span class="self-center text-xl font-semibold">DPI</span>
            </div>
          </Link>
          <div className="p-2 flex">
            {account ? (
              <div className="justify-between items-center w-full">
                <ul className="flex flex-row font-medium ">
                  <li>
                    <Link className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100">
                      About DPI
                    </Link>
                  </li>
                  <li>
                    <Link className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100">
                      Buy Specialized Covers
                    </Link>
                  </li>
                  <li>
                    <Link className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100">
                      NFT Minting
                    </Link>
                  </li>
                  <li>
                    <Link className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100">
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
              <div className="justify-between items-center w-full">
                <ul className="flex flex-row font-medium">
                  <li>
                    <Link className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100">
                      About DPI
                    </Link>
                  </li>
                  <li>
                    <Link className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100">
                      Buy Specialized Covers
                    </Link>
                  </li>
                  <li>
                    <Link className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100">
                      NFT Minting
                    </Link>
                  </li>
                  <li>
                    <Link className="block rounded-xl py-2 px-4 mr-2 hover:bg-gray-100">
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
                <div className="">
                  {account.substring(0, 4)}....
                  {account.substring(account.length - 4)}
                </div>
                <button
                  className="p-2 ml-4 bg-gray-200 rounded-xl"
                  onClick={onClickDisconnect}
                >
                  disconnect
                </button>
              </div>
            ) : (
              <button
                className="bg-gray-200 p-2 rounded-xl"
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
