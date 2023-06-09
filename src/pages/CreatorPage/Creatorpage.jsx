import "./creatorPage.css";
import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { NovelUpload } from "../../components/novelUpload/NovelUpload";
import Footer from "../../components/footer/Footer";

export const Creator = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Header type="list" /> */}
      <span className="Container">
        {" "}
        <NovelUpload />
      </span>
      <Footer></Footer>
    </div>
  );
};
