import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import Drawer from "../../components/drawer/Drawer";
import "./home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Drawer />
      <div className="homeContainer">
        <div className="homeScroll">
          <h1 className="homeTitle">Most Popular</h1>
          <Featured />
          <h1 className="homeTitle">New Releases</h1>
          <Featured />
          <h1 className="homeTitle">Top Rated</h1>
          <Featured />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
