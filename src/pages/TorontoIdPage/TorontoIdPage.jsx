import "./TorontoIdPage.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";

const TorontoIdPage = () => {
  const { torontoId } = useParams();
  const [torontoList, setTorontoList] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getTorontoIdList = async () => {
      const url = `${baseUrl}/api/toronto/${torontoId}`;
      console.log(url);
      try {
        const res = await axios.get(url);
        setTorontoList(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Something went wrong!", err);
        setError("Something went wrong! Please try again later.");
      }
    };
    getTorontoIdList();
  }, [torontoId, baseUrl]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!torontoList) {
    return <div>Loading...</div>;
  }

  return (
    <section className="details">
      <div className="details__header">
        <img
          className="details__header--img"
          src={arrowBack}
          alt="back"
          onClick={() => navigate("/toronto")}
        />
        <h1 className="details__title">{torontoList.name}</h1>
      </div>
      <div className="details__container">
        <div className="details__container--image">
          <img
            className="details__container--img2"
            src={`${baseUrl}/${torontoList.image}`}
            alt="picture of the space"
          />
        </div>
        <div>
        </div>
        <div className="details__container--text">
          <h4 className="details__container--subtext">Cost per Hour: {torontoList.cost_per_hour}</h4>
          <h4 className="details__container--subtext">Capacity: {torontoList.capacity}</h4>
        </div>
      </div>
    </section>
  );
};

export default TorontoIdPage;
