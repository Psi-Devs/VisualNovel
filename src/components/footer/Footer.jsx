import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Footer = ({ type }) => {
  return (
    <div className="footer">
      <div
        className={
          type === "list" ? "footerContainer listMode" : "footerContainer"
        }
      >
        {type !== "list" && (
          <>
            {/* <h1 className="footerTitle">Early Bird Discounts? Its's Awsome</h1> */}
            <p className="footerDesc">
              Every person has a story to tell, and within you lies a universe
              waiting to be written.{" "}
            </p>
            <button className="footerBtn">
              Sign in/Register as Creato{" "}
              <FontAwesomeIcon className="headerIcon" icon={faRegistered} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Footer;
