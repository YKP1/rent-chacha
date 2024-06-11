import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-container">
      <main className="about-main">
        <section className="about-section">
          <h1 className="about-section__title">About MoveMountains</h1>
          <p className="about-section__motto">
            "Uniting the World Within and Out"
          </p>
          <div className="about-section__mission">
            <h2 className="about-section__mission about-section__mission__title">Our Mission</h2>
            <p className="about-section__mission about-section__mission__description">
              At MoveMountains, we aim to empower freelance instructors by
              providing a platform that connects them with ideal rental spaces
              worldwide. Our mission is to facilitate seamless bookings,
              enabling instructors to focus on their passion while exploring new
              locations and expanding their reach. We believe in creating a
              supportive community where quality spaces meet the needs of
              dedicated professionals.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
