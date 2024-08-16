import { useEvalStore } from "@/stores/useEvalStore";
import React, { useEffect } from "react";
import { RiStarSFill } from "react-icons/ri";

function RatingComponent({ productId, userRate }) {
  const { productRates, getProductRates } = useEvalStore();

  useEffect(() => {
    getProductRates(productId);
  }, [productId]);

  let sum;
  let average = productRates;
  // Getting the global average
  if (average) {
    sum = 0;
    for (let obj of average) {
      sum += obj.rate;
    }
    average = sum / average.length;
  }

  return (
    <div className="flex w-fit items-center gap-2">
      <ul className="flex w-fit items-center">
        {[...Array(5)].map((_, i) => (
          <li key={i}>
            <RiStarSFill
              className={`text-lg ${
                (userRate ?? average) > i
                  ? "text-black"
                  : "text-color-dark-gray"
              } md:text-xl lg:text-2xl`}
            />
          </li>
        ))}
      </ul>
      {average && (
        <span className="text-color-dark-gray">{average?.length}</span>
      )}
    </div>
  );
}

export default RatingComponent;
