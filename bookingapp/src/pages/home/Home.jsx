import Featured from "../../components/featured/Featured";
import FeaturedQuick from "../../components/featuredQuick/FeaturedQuick";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import FeaturedNext from "../../components/featuredNext/FeaturedNext";
import "./home.css";
import Stays from "../../components/stays/Stays";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <FeaturedQuick />
        <FeaturedNext />
        <Stays />
      </div>
    </div>
  );
};

export default Home;
