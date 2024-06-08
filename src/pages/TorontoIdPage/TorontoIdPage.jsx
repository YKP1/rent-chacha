import "./TorontoIdPage.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import MapContainer from "../../components/MapContainer/MapContainer";
import BookButton from "../../components/BookButton/BookButton";

const TorontoIdPage = () => {
  const { torontoId } = useParams();
  const [torontoList, setTorontoList] = useState(null);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
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

  const openDeleteModal = () => {
    setModalOpen(true);
  };

  const closeDeleteModal = () => {
    setModalOpen(false);
  };

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
        <div className="details__container--text">
          <h4>Cost per Hour: {torontoList.cost_per_hour}</h4>
          <h4>Capacity: {torontoList.capacity}</h4>
          <button
            onClick={openDeleteModal}
            className="details__container--text button"
          >
            Book It - Chase the Experience
          </button>
          {modalOpen && (
            <BookButton
              onSubmit={closeDeleteModal}
              onCancel={closeDeleteModal}
              onClose={closeDeleteModal}
            />
          )}
        </div>
      </div>
      <div className="map-container">
        <h2>Map</h2>
        <MapContainer torontoList={torontoList} />
      </div>
    </section>
  );
};

export default TorontoIdPage;
