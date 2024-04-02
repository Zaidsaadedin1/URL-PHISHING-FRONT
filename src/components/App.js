import HomePageAnimation from "./HomePageAnimation/HomePageAnimation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalysisPage from "./AnalysisPage/AnalysisPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageAnimation />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
