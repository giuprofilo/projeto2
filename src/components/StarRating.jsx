import React, { useState } from "react";

const StarRating = ({ value, onChange }) => {
  const [rating, setRating] = useState(value);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onChange(selectedRating);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-yellow-400 ${
            star <= rating ? "fill-current" : "fill-current opacity-50"
          }`}
          onClick={() => handleStarClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
