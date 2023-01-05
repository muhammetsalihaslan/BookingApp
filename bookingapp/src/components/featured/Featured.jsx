import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
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
  );
};

export default Featured;
