import React from "react";
import "../App.css";

const Card = (props) => {
  const style = props.on ? "#FFFFFF" : "#000000";
  return (
    <>
      {props.disp ? (
        <div
          className="cards"
          style={{ backgroundColor: style }}
          onClick={() => {
            props.handleClick(props.cardIndex);
          }}
        >
          {props.value}
        </div>
      ) : (
        <div className="emptybox"></div>
      )}
    </>
  );
};

export default Card;
