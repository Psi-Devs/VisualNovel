import "./loginPage.css";
import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Login } from "../../components/login/Login";
import Footer from "../../components/footer/Footer";

export const LoginPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Header type="list" /> */}
      <span className="Container">
        {" "}
        <Login />
      </span>
      <Footer></Footer>
    </div>
  );
};
