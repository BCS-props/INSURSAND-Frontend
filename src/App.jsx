import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/main";
import DashBoard from "./pages/dashboard";

function App() {
  const apiKey = process.env.REACT_APP_INFURA_KEY;
  const [account, setAccount] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header account={account} setAccount={setAccount} />
              <Main />
            </div>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <div>
              <Header account={account} setAccount={setAccount} />
              <DashBoard
                account={account}
                setAccount={setAccount}
                apiKey={apiKey}
              />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
