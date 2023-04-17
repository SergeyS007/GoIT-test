import "./Home.css";
import logo from "../logo.svg";
import { NavLink, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>GoIT-test</p>
        <nav>
          <NavLink to="/tweets" state={{ from: location }} className="nav">
            Go to TWEETS
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Home;
