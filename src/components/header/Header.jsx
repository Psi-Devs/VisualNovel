import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faFilter,
  faNewspaper,
  faPlus,
  faSearch,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRange } from "react-date-range";
import { useState } from "react";

// import { format } from "date-fns";

const Header = ({ type }) => {
  // const [openDate, setOpendate] = useState(false);

  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // ]);

  // const [openOptions, setOpenOptions] = useState(false);
  // const [options, setOptions] = useState({
  //   hours: 9,
  //   Min: 0,
  // });

  // const handleOption = (name, operation) => {
  //   setOptions((prev) => {
  //     return {
  //       ...prev,
  //       [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
  //     };
  //   });
  // };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBookBookmark} />
            <span>Search </span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faTrophy} />
            <span>Top Rated</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faNewspaper} />
            <span>New Releses</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faPlus} />
            <span>Creater corner</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Within the pages, a hidden world awaits, waiting someone to
              discover
            </h1>
            {/* <p className="headerDesc">
              
            </p> */}
            <button className="headerBtn">Sign in/Register</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon className="headerIcon" icon={faSearch} />
                <input
                  type="text"
                  placeholder="Search Novel by Name"
                  className="headerSearchInput"
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon className="headerIcon" icon={faFilter} />
                <input
                  type="text"
                  placeholder="Filter by genre"
                  className="headerSearchInput"
                />
              </div>

              {/* <div className="headerSearchItem">
                <FontAwesomeIcon className="headerIcon" icon={faClock} />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.hours} hours : ${options.Min} minutes`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Hours</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.hours <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("hour", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.hours}
                        </span>
                        <button
                          disabled={options.hours >= 23}
                          className="optionCounterButton"
                          onClick={() => handleOption("hour", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Minutes</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.Min <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("min", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.Min}
                        </span>
                        <button
                          disabled={options.Min >= 60}
                          className="optionCounterButton"
                          onClick={() => handleOption("min", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div> */}

              <div to="" className="headerSearchItem">
                {/* <link to="/Novel" href=""></link> */}
                <button className="searchBtn">
                  <FontAwesomeIcon className="headerIcon" icon={faSearch} />
                  <span className="search">Search</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
