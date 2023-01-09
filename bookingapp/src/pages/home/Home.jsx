import Featured from "../../components/featured/Featured";
import FeaturedQuick from "../../components/featuredQuick/FeaturedQuick";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <FeaturedQuick />
      </div>
    </div>
  );
};

export default Home;
