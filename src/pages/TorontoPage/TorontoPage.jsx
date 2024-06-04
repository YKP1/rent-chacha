import React, { useState, useEffect } from "react";
import "./TorontoPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/icons/search-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import rightChevronIcon from "../../assets/icons/chevron_right-24px.svg";

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
      <div className="toronto-container">
        <div className="toronto-container__header">
          <div className="header__title">
            <h1 className="header__title--text">Toronto Rentals</h1>
          </div>
          <div className="header__options">
            <div className="options__search">
              <input
                placeholder="Search..."
                value={searchInput}
                onChange={handleSearchInput}
                className="search__input"
              />
              <img
                src={searchIcon}
                className="search__icon"
                alt="search-icon"
              />
            </div>
            <div className="options__button">
              <button onClick={() => navigate("/toronto/id")}>
                + Add New Rental
              </button>
            </div>
          </div>
        </div>
        <div className="toronto-container__list">
          <div className="list__mobile-card">
            {torontoList
              .filter((rent) => filterBySearch(rent))
              .map((rent) => (
                <div className="mobile-card__container" key={rent.id}>
                  <div className="container__row">
                    <div className="row__column">
                      <p className="column__title">Contact Name</p>
                      <p className="column__value">
                        <a
                          onClick={() => handleTorontoSelect(rent.id)}
                          className="element__title"
                        >
                          {rent.name}
                          <img src={rightChevronIcon} alt="right-icon" />
                        </a>
                      </p>
                    </div>
                    <div className="row__column">
                      <p className="column__title">City</p>
                      <p className="column__value">{rent.city}</p>
                    </div>
                  </div>
                  <div className="container__row">
                    <div className="row__column">
                      <p className="column__title">Cost per Hour</p>
                      <p className="column__value">{rent.cost_per_hour}</p>
                    </div>
                    <div className="row__column">
                      <p className="column__title">Capacity</p>
                      <p className="column__value">{rent.capacity}</p>
                    </div>
                  </div>
                  <div className="container__row">
                    <div className="row__column">
                      <img
                        src={editIcon}
                        className="column__editbtn"
                        alt="edit-icon"
                        onClick={() => handleTorontoSelect(rent.id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <table className="list__table" cellSpacing={0}>
            <thead>
              <tr className="table__header">
                <th>
                  <div>
                    Name
                    <img src={sortIcon} alt="sort-icon" />
                  </div>
                </th>
                <th>
                  <div>
                    City
                    <img src={sortIcon} alt="sort-icon" />
                  </div>
                </th>
                <th>
                  <div>
                    Cost Per Hour
                    <img src={sortIcon} alt="sort-icon" />
                  </div>
                </th>
                <th>
                  <div>
                    Capacity
                    <img src={sortIcon} alt="sort-icon" />
                  </div>
                </th>
                <th>
                  <div>
                    Venue Type
                    <img src={sortIcon} alt="sort-icon" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {torontoList
                .filter((rent) => filterBySearch(rent))
                .map((rent) => (
                  <tr className="table__row" key={rent.id}>
                    <td className="row__element column--name">
                      <a
                        onClick={() => handleTorontoSelect(rent.id)}
                        className="element__title"
                      >
                        {rent.name}
                        <img src={rightChevronIcon} alt="right-icon" />
                      </a>
                    </td>
                    <td className="row__element column--small">{rent.city}</td>
                    <td className="row__element column--small">{rent.cost_per_hour}</td>
                    <td className="row__element column--small">{rent.capacity}</td>
                    <td className="row__element column--small">{rent.venue_type}</td>
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
