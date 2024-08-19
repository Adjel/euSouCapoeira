import React, { useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";

function NoteProductButton({ note = 0, onClick }) {
  const [hoverRating, setHoverRating] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(-1);
  };

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index}>
          {note >= index + 1 || hoverRating >= index ? (
            <RiStarSFill
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`w-8 md:w-10 lg:w-12 h-auto fill-color-gold
              `}
              key={index}
              onClick={() => onClick(index + 1)}
            />
          ) : (
            <RiStarSLine
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`w-8 md:w-10 lg:w-12 h-auto hover:${index}
                `}
              key={index}
              onClick={() => onClick(index + 1)}
            />
          )}
        </li>
      ))}
    </>
  );
}

export default NoteProductButton;
