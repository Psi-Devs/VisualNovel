import "./reader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReaderControls = () => {
  return (
    <div>
      <div className="readerTitle">
        <h3 className="novelName">
          Amber Secrets <span className="novelAuthor">by Willow summers </span>
        </h3>
        <h3 className="novelName">
          <div className="rating">
            Rated 4.5
            <FontAwesomeIcon icon={faStar} />
          </div>
        </h3>
      </div>
    </div>
  );
};

export default ReaderControls;
