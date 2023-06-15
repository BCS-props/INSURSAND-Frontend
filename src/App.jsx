import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [account, setAccount] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Header account={account} setAccount={setAccount} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
