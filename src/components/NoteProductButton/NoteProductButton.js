import React, { useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";

function NoteProductButton({ note = 0, onClick }) {
  // new note is used to now which note user is hovering and also keeping the user saved note
  const [userNewNote, setUserNewNote] = useState(note);
  // for now the use is hovering nothing
  const [hoverRating, setHoverRating] = useState(-1);

  // display the current hovered note (so we have to reset the showed saved note)
  const handleMouseEnter = (index) => {
    setUserNewNote("O");
    setHoverRating(index);
  };

  // now we can retrieve and show the user saved note
  // now the user is hovering nothing again
  const handleMouseLeave = () => {
    setUserNewNote(note);
    setHoverRating(-1);
  };

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index}>
          {userNewNote >= index + 1 || hoverRating >= index ? (
            // show colored note until the note
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
