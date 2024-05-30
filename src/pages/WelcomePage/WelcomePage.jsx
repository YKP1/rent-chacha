import "./WelcomePage.scss";

const WelcomePage = () => {
  
return (
    <div className="welcome-page">
      <div className="welcome-container__image">
        <img src="path/to/your/image.jpg" alt="Welcome" className="image__pic" />
      </div>
      <h1 className="welcome-header"> You are about to make a serious decision and leave your comfort zone, build your confidence in what you do, share it with people, travel around the world and be your own master. </h1>
      <button className="welcome-button">Jeeeez..I know!</button>
    </div>
  );
}

export default WelcomePage;