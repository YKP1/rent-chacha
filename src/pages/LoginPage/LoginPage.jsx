import "./LoginPage.scss";
import GmailLogo from "../../assets/icons/gmail_icon.png";
import FacebookLogo from "../../assets/icons/facebook.svg";


const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <button className="login-btn facebook-login">
          <img src={FacebookLogo} alt="Facebook Icon" />
          <span>Login with Facebook</span>
        </button>
        <button className="login-btn gmail-login">
          <img src={GmailLogo} alt="Gmail Icon" />
          <span>Login with Gmail</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
