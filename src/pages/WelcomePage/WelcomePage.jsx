import React, {useState, useEffect} from "react";
import axios from "axios";
import "./WelcomePage.scss";
import logoGiff from "../../assets/logo/animated-logo.gif";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [quote, setQuote] = useState ('');
  const navigate = useNavigate();

  useEffect(() =>{
    const loadQuote = async () => {
      try{
        const res = await axios.get('https://type.fit/api/quotes');
        const quotes = res.data;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote.text);
      } catch (err){
        console.err('Error fetching the quote', err);
      }
    };
    loadQuote();
  }, []);
  
return (
    <div className="welcome-page">
      <div className="welcome-container__image">
        <img src={logoGiff} alt="Welcome" className="image__giff" />
      </div>
      <h1 className="welcome-header"> {quote || "Loading..."} </h1>
      <button onClick={() => navigate("/home")} className="welcome-button">Jeez..I know!</button>
    </div>
  );
}

export default WelcomePage;