import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Cards.scss';
import EurekaYogi from '../../assets/images/eurika-yogi.jpg';
import TorontoYogi from '../../assets/images/toronto-yogi.jpg';
import NashvilleYogi from '../../assets/images/nashville-yogi.jpg';
import MexicoYogi from '../../assets/images/mexico-city-yogi.jpg';

const TORONTO_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=43.6532&lon=-79.3832&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
const NASHVILLE_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=36.1627&lon=-86.7816&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
const MEXICO_CITY_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=19.4326&lon=-99.1332&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
const EUREKA_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=40.8021&lon=-124.1637&appid=${import.meta.env.VITE_API_KEY}&units=metric`;

const Cards = () => {
  const [weatherData, setWeatherData] = useState({});

  const cities = [
    { name: 'EUREKA', subheader: 'Take your time - discover here', api: EUREKA_API_URL, link: '/eureka' },
    { name: 'TORONTO', subheader: 'You can do anything - discover here', api: TORONTO_API_URL, link: '/toronto' },
    { name: 'NASHVILLE', subheader: 'You are good enough - discover here', api: NASHVILLE_API_URL, link: '/nashville' },
    { name: 'MEXICO CITY', subheader: 'You can do it - discover here', api: MEXICO_CITY_API_URL, link: '/mexico-city' },
  ];

  useEffect(() => {
    const fetchWeather = async (city) => {
      try {
        const response = await axios.get(city.api);
        setWeatherData(prevData => ({ ...prevData, [city.name]: response.data }));
      } catch (error) {
        console.error(`Error fetching weather for ${city.name}:`, error);
      }
    };

    cities.forEach(city => {
      fetchWeather(city);
    });
  }, []);

  return (
    <div className="cards">
      {cities.map(city => (
        <Link to={city.link} className="cards__card" key={city.name}>
          <h2 className="cards__title">{city.name}</h2>
          <div className="cards__weather">
            {weatherData[city.name] ? (
              <div className="cards__weather-info">
                <p className="cards__weather-info">Current Temperature: {weatherData[city.name].main.temp}°C</p>
                <p className="cards__weather-info">Condition: {weatherData[city.name].weather[0].description}</p>
              </div>
            ) : (
              <p className="cards__loading">Loading...</p>
            )}
          </div>
          <h4 className="cards__subheader">{city.subheader}</h4>
          <div className="cards__image-container">
            {city.name === 'EUREKA' && <img className="cards__image" src={EurekaYogi} alt="Yogi in winter jacket" />}
            {city.name === 'TORONTO' && <img className="cards__image" src={TorontoYogi} alt="Yogi in light jacket" />}
            {city.name === 'NASHVILLE' && <img className="cards__image" src={NashvilleYogi} alt="Yogi in t-shirt" />}
            {city.name === 'MEXICO CITY' && <img className="cards__image" src={MexicoYogi} alt="Yogi without clothes" />}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;