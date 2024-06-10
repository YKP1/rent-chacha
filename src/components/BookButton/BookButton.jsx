import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../assets/icons/close-24px.svg";
import AnimatedLogo from "../../assets/logo/animated-logo.gif";
import "./BookButton.scss";

export default function BookButton({ onSubmit, onCancel, onClose }) {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !contact) {
      setErrorMessage("All fields are required!");
      return;
    }

    try {
      onSubmit({ title, contact });
      setErrorMessage("");
      alert("Good job! Submitted successfully! We will be in touch.");
      navigate("/");
    } catch (error) {
      setErrorMessage(
        error.response?.data || "An error occurred. Please try again."
      );
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="book-form">
      <div className="book-form__modal">
        <div className="book-form__header">
          <p className="book-form__close" onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </p>
        </div>
        <form onSubmit={handleSubmit} className="book-form__form">
          <label className="book-form__label">
            Your Name:
            <input
              type="text"
              name="title"
              placeholder="Enter your name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="book-form__input"
            />
          </label>
          <label className="book-form__label">
            Your Contact Number:
            <input
              type="text"
              name="contact"
              placeholder="Enter your contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="book-form__input"
            />
          </label>
          {errorMessage && <p className="book-form__error">{errorMessage}</p>}
          <div className="book-form__buttons">
            <button
              type="submit"
              className="book-form__button book-form__button--submit"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="book-form__button book-form__button--cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
