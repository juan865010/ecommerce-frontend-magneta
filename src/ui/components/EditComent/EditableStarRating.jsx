import React, { useState } from "react";

const EditableStarRating = ({ rating, onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleStarClick = (starIndex) => {
    const newRating = starIndex + 1;
    setSelectedRating(newRating);
    onRatingChange(newRating);
  };

  return (
    <div style={{textAlign:'center'}}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{
            cursor: "pointer",
            fontSize:45,
            color: selectedRating > index ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default EditableStarRating;
