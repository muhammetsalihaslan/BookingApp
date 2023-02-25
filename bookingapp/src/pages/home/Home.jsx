import Featured from "../../components/featured/Featured";
import FeaturedQuick from "../../components/featuredQuick/FeaturedQuick";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import FeaturedNext from "../../components/featuredNext/FeaturedNext";
import "./home.css";
import Stays from "../../components/stays/Stays";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import Currency from "../../components/currency/Currency";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [open, setOpens] = useState(location.state.open);

  return (
    <div>
      {open && <Currency />}
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <FeaturedQuick />
        <FeaturedNext />
        <Stays />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
