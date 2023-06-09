import "./novel.css";
import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import Reader from "../../components/reader/Reader";
import ReaderControls from "../../components/reader/ReaderControls";

export const Novel = () => {
  return (
    <div>
      <div className="fixed">
        <Navbar></Navbar>
        <ReaderControls />
      </div>
      <div className="Container">
        <div className="readerColumns">
          <div className="pageScroll">
            <Reader />
            <Reader />
            <Reader />
            <Reader />
            <Reader />
            <Reader />
            <Reader />
          </div>
          <div className="rightMenu">
            <h1>this is right menu yet to be designed </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
