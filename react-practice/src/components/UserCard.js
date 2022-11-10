import React from "react";
import "./UserCard.css";

const UserCard = (propsFromCardsParent) => {
  console.log(propsFromCardsParent);
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{propsFromCardsParent.children} </div>
        {/* <p>If we want to pass only the specified props, we can use like props.childern.props.name</p> */}
        {/* <div className="header">{props.children.props.authorName} </div> */}
      </div>
      <div className="ui bottom button">
        <i className="add icon"></i>
        Add To Cart
      </div>
    </div>
  );
};
export default UserCard;
