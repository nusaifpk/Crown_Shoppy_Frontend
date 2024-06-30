import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import data_categories from "../../assets/data_categories";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4, // 4 items for desktop
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  return (
    <div className="main_home">
      <div className="home_section">
        <div className="home_head">
          <h3>Welcome to</h3>
          <h1>CROWN<span>SHOPPY</span></h1>
          <hr />
          <h4>TOP CATEGORIES</h4>
          <hr />
          <div className="carousel-wrapper">
            <Carousel
              responsive={responsive}
              infinite
              swipeable
              draggable
              showDots={false}
              autoPlay
              autoPlaySpeed={3000}
              keyBoardControl
              customTransition="all 0.5s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="carousel-item-padding-40-px"
            >
              {data_categories.map((item) => (
                <div key={item.id} className="item_card">
                  <img src={item.image} alt={item.type} title={"Go to " + item.type} />
                  <h3>{item.type}</h3>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
