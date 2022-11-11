import React from "react";
import CorouselCard from "../components/CorouselCard";
import pic1 from "../images/slider1.jpg";
import pic2 from "../images/slider2.jpg";

const Carousel = () => {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{position:"relative", color:"white"}}>
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          {/* <CorouselCard /> */}
          {/* <div className="card">
            <div className="card-body">
              <h4 className="card-title">Learn the technolgies</h4>
              <p className="card-text">
                Learn the technolgies whichever you are wish to..!
              </p>
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div> */}

          <div style={{position:"absolute", bottom:"8px", left:"16px"}}>
             <div className="card">
            <div className="card-body">
              <h4 className="card-title">Learn the technolgies</h4>
              <p className="card-text">
                Learn the technolgies whichever you are wish to..!
              </p>
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
          </div>
          <div className="item active">
            <img src={pic1} alt="Los Angeles" style={{ width: "100%" }} />
          </div>

          <div className="item">
            <img src={pic2} alt="Chicago" style={{ width: "100%" }} />
          </div>

          <div className="item">
            <img src={pic1} alt="New york" style={{ width: "100%" }} />
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
