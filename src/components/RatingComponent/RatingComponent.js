import { useEvalStore } from "@/stores/useEvalStore";
import React from "react";
import { RiStarSFill } from "react-icons/ri";

function RatingComponent({ productId, userRate, option = "totalRates" }) {
  const { getProductRates } = useEvalStore();

  let rates = getProductRates(productId);
  let average;

  // Getting the global average
  if (rates) {
    let sum = 0;
    for (let obj of rates) {
      sum += obj.rate;
    }
    average = sum / rates.length;
  }

  return (
    <div className="flex w-fit items-center gap-2">
      <ul className="flex w-fit items-center">
        {[...Array(5)].map((_, i) => (
          <li key={i}>
            {console.log(rates)}
            <RiStarSFill
              className={`text-lg ${
                (userRate ?? Math.round(average)) > i
                  ? "text-black"
                  : "text-color-dark-gray"
              } md:text-xl lg:text-2xl`}
            />
          </li>
        ))}
      </ul>
      {option === "totalRates" ? (
        <span className="text-color-dark-gray">{rates.length}</span>
      ) : option === "average" ? (
        <div className="flex lfex-row gap-1 text-color-dark-gray">
          <span>{Math.round(average)}</span>
          <span>/</span>
          <span>5</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default RatingComponent;
