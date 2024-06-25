import React from "react";
import { RiStarSFill } from "react-icons/ri";

function RatingComponent({ rate, rateNbr }) {
  return (
    <div className="flex w-fit">
      {rateNbr > 0 &&
        [...Array(5)].map((_, i) => (
          <RiStarSFill
            key={i}
            className={`text-lg ${
              i < rate && rate > 0
                ? "text-black"
                : "text-background-medium-gray"
            } md:text-xl lg:text-2xl`}
          />
        ))}
    </div>
  );
}

export default RatingComponent;
