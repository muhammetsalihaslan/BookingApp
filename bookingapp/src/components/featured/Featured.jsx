import React from "react";
import "./featured.css";
import PropertyList from "../propertList/PropertyList";

const Featured = () => {
  return (
    <>
      <div className="title">
        <h2>Offers</h2>
        <p>Promotions, deals, and special offers for you</p>
      </div>
      <div className="offers">
        <div className="offersItem">
          <img
            src="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/182431478.jpeg?k=fcbb6d5552a1d4ff338978206c449077ab8ad696050cfd7e4edef1ddc11225cc&o="
            alt=""
            className="offersImg"
          />
          <div className="offersTitles">
            <p>New year, new adventures</p>
            <p>
              Save 15% or more when you book and stay <br /> before March 31,
              2023
            </p>
            <button className="offersButton">Find Erly 2023 Deals</button>
          </div>
        </div>
        <div className="offersItem">
          <img
            src="https://r-xx.bstatic.com/xdata/images/xphoto/714x300/184699273.jpeg?k=503e088a7d417c30217b5109dda404d2c2050001588cf7a45fca63e3363573de&o="
            alt=""
            className="offersImg"
          />
          <div className="offersTitles">
            <p>Escape for a while</p>
            <p>
              Enjoy the freedom of a monthly stay on <br /> msaBooking.com
            </p>
            <button className="offersButton">Discovery Montly Stays</button>
          </div>
        </div>
      </div>
      <div className="title">
        <h2>Browse by property type</h2>
      </div>
      <PropertyList />
      <div className="featured">
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://media.istockphoto.com/id/1327851924/tr/foto%C4%9Fraf/aerial-view-of-the-port-of-batumi-area-on-black-seas-coast-batumi-city-adjara-region.jpg?s=612x612&w=0&k=20&c=-ITDfhoNDwPOEvQme4AnMjUxBWYOe-KZKTboVLbzroo="
            alt=""
          />
          <div className="featuredTitles">
            <h1>Batumi</h1>
            <img
              className="flag"
              src="https://cdn-icons-png.flaticon.com/512/5111/5111838.png"
              alt=""
            />
          </div>
        </div>
        <div className="featuredItem">
          <img
            className="featuredImg"
            src="https://cdn.pixabay.com/photo/2018/03/15/05/35/water-3227164_960_720.jpg"
            alt=""
          />
          <div className="featuredTitles">
            <h1>Miami Beach</h1>
            <img
              className="flag"
              src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="featured2">
        <div className="featuredItem">
          <img
            className="featuredImg2"
            src="https://cdn.pixabay.com/photo/2016/01/19/19/26/amsterdam-1150319_960_720.jpg"
            alt=""
          />
          <div className="featuredTitles">
            <h1>Amsterdam</h1>
            <img
              className="flag"
              src="https://cdn-icons-png.flaticon.com/512/206/206615.png"
              alt=""
            />
          </div>
        </div>
        <div className="featuredItem">
          <img
            className="featuredImg2"
            src="https://cdn.pixabay.com/photo/2018/05/14/23/43/street-3401918_960_720.jpg"
            alt=""
          />
          <div className="featuredTitles">
            <h1>Rome</h1>
            <img
              className="flag"
              src="https://cdn-icons-png.flaticon.com/512/3373/3373278.png"
              alt=""
            />
          </div>
        </div>
        <div className="featuredItem">
          <img
            className="featuredImg2"
            src="https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg"
            alt=""
          />
          <div className="featuredTitles">
            <h1>Paris</h1>
            <img
              className="flag"
              src="https://cdn-icons-png.flaticon.com/512/206/206657.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
