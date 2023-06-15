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
    <header className="py-4 px-8 flex justify-end">
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
          <button className="flex items-center" onClick={onClickConnect}>
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
