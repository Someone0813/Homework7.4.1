import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FivesPage from "./FivesPage";
import SixthPage from "./SixthPage";
import SeventhPage from "./SeventhPage";
import EightPage from "./EightPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/secondpage" element={<SecondPage />}></Route>
        <Route path="/thirdpage" element={<ThirdPage/>}></Route>
        <Route path="/fourthpage" element={<FourthPage/>}></Route>
        <Route path="/fivespage" element={<FivesPage/>}></Route>
        <Route path="/sixthpage" element={<SixthPage/>}></Route>
        <Route path="/seventhpage" element={<SeventhPage/>}></Route>
        <Route path="/eightpage" element={<EightPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
