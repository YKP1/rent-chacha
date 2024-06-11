import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import HomePage from "./pages/HomePage/HomePage";
import TorontoPage from "./pages/TorontoPage/TorontoPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TorontoIdPage from "./pages/TorontoIdPage/TorontoIdPage";
import AboutPage from "./pages/AboutPage/AboutPage";

// import EurekaPage from './pages/Eureka';
// import NashvillePage from './pages/NashvillePage';
// import MexicoCityPage from './pages/MexicoCityPage';
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/toronto" element={<TorontoPage />} />
        <Route path="/toronto/:torontoId" element={<TorontoIdPage />} />
        {/* <Route path="/eureka" element={<EurekaPage />} /> */}
        {/* <Route path="/nashville" element={<NashvillePage />} /> */}
        {/* <Route path="/mexico-city" element={<MexicoCityPage />}  */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
