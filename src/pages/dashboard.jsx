import Portfolio from "../components/Portfolio";

const DashBoard = ({ account, apiKey }) => {
  return (
    <div>
      <Portfolio account={account} apiKey={apiKey} />
    </div>
  );
};

export default DashBoard;
