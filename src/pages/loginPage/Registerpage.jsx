import "./loginPage.css";
import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Register } from "../../components/login/Register";
import Footer from "../../components/footer/Footer";

export const Registerpage = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Header type="list" /> */}
      <span className="Container">
        {" "}
        <Register />
      </span>
      <Footer></Footer>
    </div>
  );
};
