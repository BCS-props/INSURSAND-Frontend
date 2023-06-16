import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/main";

function App() {
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
