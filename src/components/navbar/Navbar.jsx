import "./navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faBook,
  faHome,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  // const navigate = useNavigate();
  return (
    <div className="navbar">
      <nav className="navContainer">
        <span className="logo">
          ComicVerse{" "}
          <Link to="/home" className="navItems">
            <FontAwesomeIcon className="headerIcon" icon={faHome} />
            Home
          </Link>
          <Link to="/Novel" className="navItems">
            <FontAwesomeIcon className="headerIcon" icon={faBook} />
            read
          </Link>
          <Link to="/Creator" className="navItems">
            <FontAwesomeIcon className="headerIcon" icon={faAdd} />
            Creator
          </Link>
        </span>

        <div>
          <Link to="/">
            <button className="navButton">
              Login/Register{" "}
              <FontAwesomeIcon className="headerIcon" icon={faSignIn} />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
