import React from "react";
import { Rating } from "semantic-ui-react";

const Card = (propsFromApp) => {
  console.log(propsFromApp);

  return (
    <div>
      <div className="column">
        <div className="ui centered card" id="cards" style={{ width: "auto" }}>
          <div className="image">
            <img src={propsFromApp.picture} />
          </div>
          <div className="content" style={{ lineHeight: "1.5" }}>
            <a className="header" style={{ lineHeight: "1.5" }}>
              {propsFromApp.title}
            </a>
            <div className="meta">
              <span className="date">{propsFromApp.authorName}</span>
            </div>
            <Rating maxRating={5} defaultRating={3} icon="star" size="mini" />
           <span> ({propsFromApp.noOfRatings})</span>
            <div className="description">
              <h4>{propsFromApp.price}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
