import React from "react";
import "./featuredNext.css";

const featuredNext = () => {
  return (
    <>
      <h2 className="next">Get inspiration for your next trip</h2>
      <div className="featuredN">
        <div className="featuredNItem">
          <img
            className="featuredNImg"
            src="https://xx.bstatic.com/xdata/images/xphoto/1182x887/185276552.jpg?k=6af3762004dac3a794e135b20a04dba7c74105641ebbd95d73cb7c8b4a5220a8&o=?size=S"
            alt=""
          />
          <div className="featuredNTitles">
            <h3>The top 10 travel destinations for 2023</h3>
            <p>
              From spiritual seaside towns to artistic capitals and hidden gems
            </p>
          </div>
        </div>
        <div className="featuredNItem">
          <img
            className="featuredNImg"
            src="https://xx.bstatic.com/xdata/images/xphoto/1182x887/183822504.jpg?k=bfd73252d55392059a21097dabb477bebe223db81d602245035b07df89063dbc&o=?size=M"
            alt=""
          />
          <div className="featuredNTitles">
            <h3>Japan's 6 most spectacular onsen</h3>
            <p>
              With surreal views ranging from misty mountains to Pacific
              sunrises framed by Mount Fuji
            </p>
          </div>
        </div>
        <div className="featuredNItem">
          <img
            className="featuredNImg"
            src="https://bstatic.com/xdata/images/xphoto/1182x887/180173480.jpg?k=6ea6aa39bf8daaf82862915b72888bcf8ce68f0641053f336fcdd9d842b29d9d&o=?size=S"
            alt=""
          />
          <div className="featuredNTitles">
            <h3>Europe's 10 most festive Christmas markets</h3>
            <p>
              From spiritual seaside towns to artistic capitals and hidden gems
            </p>
          </div>
        </div>
      </div>
      <div className="featuredN2">
        <div className="featuredItem">
          <img
            className="featuredNImg2"
            src="https://bstatic.com/xdata/images/xphoto/1182x887/167770486.jpg?k=3023bd06345ee83b58867ec7c1fa16660dc2cf277220664e76d1f94aa845bf9c&o=?size=S"
            alt=""
          />
          <div className="featuredNTitles">
            <h3>48 hours in Paris, France</h3>
            <p>The perfect 2-day itinerary for visiting the city of Light</p>
          </div>
        </div>
        <div className="featuredItem">
          <img
            className="featuredNImg2"
            src="https://bstatic.com/xdata/images/xphoto/1182x887/177192154.jpg?k=0dffcde8d4c791521f40ea6f41913464dfc07d629b15fe31d2085413b6e018e2&o=?size=S"
            alt=""
          />
          <div className="featuredNTitles">
            <h3>The US's coziest stays for the holidays</h3>
            <p>
              Long-term stays for a winter break, from period properties to
              picture-perfect townhouses
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default featuredNext;
