import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import Drawer from "../../components/drawer/Drawer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Drawer />
      <div className="homeContainer">
        <h1 className="homeTitle">Our Services</h1>
        <Featured />
      </div>
    </div>
  );
};

export default Home;
