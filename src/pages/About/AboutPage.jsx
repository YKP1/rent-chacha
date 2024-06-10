import React from "react";
import "./About.scss";

const AboutPage = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/login">Login</a>
                </nav>
            </header>
            <main className="about-main">
                <section className="about-section">
                    <h1>About MoveMountains</h1>
                    <p className="motto">"Uniting Instructors and Rental Spaces Worldwide"</p>
                    <div className="mission">
                        <h2>Our Mission</h2>
                        <p>
                            At MoveMountains, we aim to empower freelance instructors by providing a platform that connects them with ideal rental spaces worldwide. Our mission is to facilitate seamless bookings, enabling instructors to focus on their passion while exploring new locations and expanding their reach. We believe in creating a supportive community where quality spaces meet the needs of dedicated professionals.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
