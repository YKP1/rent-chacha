import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import EurekaPage from './pages/EurekaPage';
// import TorontoPage from './pages/TorontoPage';
// import NashvillePage from './pages/NashvillePage';
// import MexicoCityPage from './pages/MexicoCityPage';
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        {/* <Route path="/eureka" element={<EurekaPage />} />
        <Route path="/toronto" element={<TorontoPage />} />
        <Route path="/nashville" element={<NashvillePage />} />
        <Route path="/mexico-city" element={<MexicoCityPage />}  */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;