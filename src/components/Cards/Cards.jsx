import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cards.scss';

const TORONTO_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=43.6532&lon=-79.3832&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
const NASHVILLE_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=36.1627&lon=-86.7816&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
const MEXICO_CITY_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=19.4326&lon=-99.1332&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
const EUREKA_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=40.8021&lon=-124.1637&appid=${import.meta.env.VITE_API_KEY}&units=metric`;

const Cards = () => {
  const [weatherData, setWeatherData] = useState({});

  const cities = [
    { name: 'EUREKA', subheader: 'Take your time - discover here', api: EUREKA_API_URL },
    { name: 'TORONTO', subheader: 'You can do anything - discover here', api: TORONTO_API_URL },
    { name: 'NASHVILLE', subheader: 'You are good enough - discover here', api: NASHVILLE_API_URL },
    { name: 'MEXICO CITY', subheader: 'You can do it - discover here', api: MEXICO_CITY_API_URL },
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
        <div className="cards__card" key={city.name}>
          <h2 className="cards__title">{city.name}</h2>
          <h4 className="cards__subheader">{city.subheader}</h4>
          <div className="cards__weather">
            {weatherData[city.name] ? (
              <div>
                <p className="cards__weather-info">Current Temperature: {weatherData[city.name].main.temp}°C</p>
                <p className="cards__weather-info">Condition: {weatherData[city.name].weather[0].description}</p>
              </div>
            ) : (
              <p className="cards__loading">Loading...</p>
            )}
          </div>
          <div className="cards__image-container">
            <img className="cards__image" src={`/images/${city.name.toLowerCase().replace(' ', '_')}.jpg`} alt={city.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;