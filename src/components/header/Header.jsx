import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookMedical,
  faCalendarDay,
  faClock,
  faHospital,
  faKitMedical,
  faSearch,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";

import { format } from "date-fns";

const Header = ({ type }) => {
  const [openDate, setOpendate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    hours: 9,
    Min: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBookMedical} />
            <span>Find </span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faUserDoctor} />
            <span>Top Rated</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faHospital} />
            <span>New Releses</span>
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faKitMedical} />
            <span>Creater </span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Early Bird Discounts? Its's Awsome</h1>
            <p className="headerDesc">
              Find your Cure from Best Doctors Hassle free at an affordable
              prices
            </p>
            <button className="headerBtn">Sign in/Register</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon className="headerIcon" icon={faUserDoctor} />
                <input
                  type="text"
                  placeholder="Find Your Doctor"
                  className="headerSearchInput"
                />
              </div>

              <div className="headerSearchItem">
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
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon className="headerIcon" icon={faCalendarDay} />
                <span
                  onClick={() => setOpendate(!openDate)}
                  className="headerSearchText"
                >
                  {" "}
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}{" "}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>

              <div className="headerSearchItem">
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
