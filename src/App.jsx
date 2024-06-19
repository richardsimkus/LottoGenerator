import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayPage from "src/components/PlayPage/PlayPage.jsx";
import TopNav from "src/components/TopNav/TopNav.jsx";

import "./App.css";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <div className="w-100 h-[100vh] bg-base-200">
      <div className="max-w-[90vw] h-[100vh] m-auto bg-base-200 ">
        <BrowserRouter>
          <TopNav />
          <div className="max-w-[80vw] m-auto">
            <Routes>
              <Route element={<PlayPage />} path="/play" />
              <Route element={<Home />} path="/" />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
