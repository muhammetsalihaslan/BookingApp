import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const setOpl = () => {
    setOpenOptions(!openOptions);
    setOpenDate(false);
  };

  const setOpD = () => {
    setOpenDate(!openDate);
    setOpenOptions(false);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination/property name:</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date:</label>
              <span onClick={() => setOpD()}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yy"
                )}`}
              </span>
            </div>
            <div className="lsItem">
              <label>Option</label>
              <span onClick={() => setOpl()}>
                {`${options.adult} adult • ${options.children} children • ${options.room} room`}
              </span>
            </div>
            <div className="lsItems">
              <input type="checkbox" />
              <label>Entire homes & apartments</label>
            </div>
            <div className="lsItems">
              <input type="checkbox" />
              <label>I'm traveling for work</label>
            </div>
            <button className="search">Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
        <div className="opendate">
          {openDate && (
            <DateRange
              onChange={(item) => setDate([item.selection])}
              minDate={new Date()}
              ranges={date}
            />
          )}
        </div>
        <div className="openOptions">
          {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
