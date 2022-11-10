import React from "react";
import Picture from "../images/udemy.jpg";
import Card from "./Card";
import Carousel from "./Carousel";
import UserCard from "./UserCard";

const CardsParentHomePage = () => {
  return (
    <div className="container">
      <div className="ui container">
        <Carousel />
        <div className="ui four column grid">
          <div className="row">
            <UserCard>
              <Card
                authorName="Ranganath K"
                noOfRatings="3599"
                title="ReactJS Guide"
                picture={Picture}
                price="&#x20b9;3000"
                rating="3"
              />
            </UserCard>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <UserCard>
              <Card
                authorName="Puneeth R K"
                noOfRatings="35959"
                title="NodeJS Guide"
                picture={Picture}
                price="&#x20b9;2500"
                rating="4"
              />
            </UserCard>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <UserCard>
              <Card
                authorName="Roberrt"
                noOfRatings="35499"
                title="Javascript Guide"
                picture={Picture}
                price="&#x20b9;3300"
                rating="5"
              />
            </UserCard>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <UserCard>
              <Card
                authorName="Williams"
                noOfRatings="36599"
                title="Web Guide"
                picture={Picture}
                price="&#x20b9;3900"
                rating="2"
              />
            </UserCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsParentHomePage;
