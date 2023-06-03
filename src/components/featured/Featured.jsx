import "./featured.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faFilter } from "@fortawesome/free-solid-svg-icons";
import Card from "../card/Card";

const Featured = () => {
  return (
    <div className="featured">
      <Card />
      <div className="featuredItem">
        <img
          src="https://img.freepik.com/free-photo/beautiful-view-tall-ferris-wheel-marseille-france-evening_181624-1763.jpg?t=st=1685319958~exp=1685320558~hmac=08b8a525c93d5be8dc257aa5ed0e77a37bc8b6f852b07e9901d2d0ee20c90833"
          alt="none"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Novel2</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://img.freepik.com/free-photo/young-adult-couple-each-other-s-arms-snow-covered-street_1153-4720.jpg?t=st=1685319958~exp=1685320558~hmac=e23b91e80aef2a15064467c411425422c30913d027cdee5ff150376014c6c03d"
          alt="none"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Novel3</h1>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://img.freepik.com/free-photo/football-stadium-night-generative-ai_260559-480.jpg?w=740&t=st=1685337139~exp=1685337739~hmac=6a692b2f7f91095d47f4e8b1d78f72997bd89b5e16149aae49f7612d12898e97"
          alt="none"
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Novel4</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
