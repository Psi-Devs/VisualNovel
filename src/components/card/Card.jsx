import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="cardItem">
      <img
        src="https://img.freepik.com/free-photo/people-sitting-bench-forest-night-generative-ai_260559-472.jpg?w=360&t=st=1685299717~exp=1685300317~hmac=875bb7569eccc69c86f69bf2e7ff7aa5df40942687e456f22f2c00f911712e7b"
        alt="none"
        className="cardImg"
      />
      <div className="cardTitle">
        <h2 className="novelName">novel1</h2>
        <h3 className="novelName">
          4.5 <FontAwesomeIcon icon={faStar} />
        </h3>
      </div>
    </div>
  );
};

export default Card;
