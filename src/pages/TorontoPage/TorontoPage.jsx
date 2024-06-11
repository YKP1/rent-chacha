import React, { useState, useEffect } from "react";
import "./TorontoPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/icons/search-24px.svg";

const TorontoPage = () => {
  const [torontoList, setTorontoList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    getTorontoRents();
  }, []);

  const getTorontoRents = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/toronto`);
      setTorontoList(res.data);
    } catch (error) {
      console.log("Something went wrong!" + error);
    }
  };

  const handleTorontoSelect = (id) => {
    navigate(`/toronto/${id}`);
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const filterBySearch = (rent) => {
    return Object.keys(rent).some((r) =>
      String(rent[r]).toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <main className="toronto-main">
      <div className="toronto-hero">
        <div className="toronto-hero__overlay">
          <h1 className="toronto-hero__title"><span>Toronto </span>believes in you</h1>
        </div>
      </div>
      <div className="toronto-container">
        <div className="toronto-container__header">
          <div className="toronto-container__header--options">
            <div className="options__search">
              <input
                placeholder="Search..."
                value={searchInput}
                onChange={handleSearchInput}
                className="options__search--input"
              />
              <img
                src={searchIcon}
                className="options__search--icon"
                alt="search-icon"
              />
            </div>
          </div>
        </div>
        <div className="toronto-container__list">
          <table className="list__table" cellSpacing={0}>
            <thead>
              <tr className="table__header">
                <th className="table__header-cell">
                  <div className="table__header-content">
                    Name
                  </div>
                </th>
                <th className="table__header--cell">
                  <div className="table__header-content">
                    City
                  </div>
                </th>
                <th className="table__header-cell">
                  <div className="table__header-content">
                    Cost Per Hour
                  </div>
                </th>
                <th className="table__header-cell">
                  <div className="table__header-content">
                    Capacity
                  </div>
                </th>
                <th className="table__header-cell">
                  <div className="table__header-content">
                    Venue Type
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {torontoList
                .filter((rent) => filterBySearch(rent))
                .map((rent) => (
                  <tr className="table__row" key={rent.id}>
                    <td className="table__cell table__cell--name">
                      <a
                        onClick={() => handleTorontoSelect(rent.id)}
                        className="table__link"
                      >
                        {rent.name}
                      </a>
                      <img
                        src={`${baseUrl}/${rent.image}`}
                        alt={rent.name}
                        className="table__image"
                      />
                    </td>
                    <td className="table__cell table__cell--small">
                      {rent.city}
                    </td>
                    <td className="table__cell table__cell--small">
                      {rent.cost_per_hour}
                    </td>
                    <td className="table__cell table__cell--small">
                      {rent.capacity}
                    </td>
                    <td className="table__cell table__cell--small">
                      {rent.venue_type}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default TorontoPage;
