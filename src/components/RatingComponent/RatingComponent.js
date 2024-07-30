import React from "react";
import { RiStarSFill } from "react-icons/ri";

function RatingComponent({ rateList, userRate }) {
  let sum;
  let average = undefined;
  // Getting the global average
  if (rateList) {
    sum = 0;
    for (let obj of rateList) {
      sum += obj.rate;
    }
    average = sum / rateList.length;
  }

  return (
    <span className="flex w-fit items-center gap-2">
      <span className="flex w-fit items-center">
        {[...Array(5)].map((_, i) => (
          <RiStarSFill
            key={i}
            className={`text-lg ${
              (userRate ?? average) > i ? "text-black" : "text-color-dark-gray"
            } md:text-xl lg:text-2xl`}
          />
        ))}
      </span>
      {rateList && (
        <span className="text-color-dark-gray">{rateList?.length}</span>
      )}
    </span>
  );
}

export default RatingComponent;
