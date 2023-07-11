import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const StarRating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div style={{margin:0,padding:0}}>
      {stars.map((star) => {
        if (star <= rating) {
          return <StarIcon key={star} style={{ color: "#FFA800" }} />;
        } else if (star - 0.5 === rating) {
          return (
            <div key={star} style={{ display: "inline-flex", alignItems: "center" }}>
              <StarHalfIcon style={{ color: "#FFA800" }} />
              <div style={{ backgroundColor: "lightgray", width: "50%", height: "100%" }} />
            </div>
          );
        } else {
          return <StarBorderIcon key={star} style={{ color: "#FFA800", fill: "lightgray" }} />;
        }
      })}
    </div>
  );
};

export default StarRating;


