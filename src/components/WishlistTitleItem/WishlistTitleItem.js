import React from "react";

function WishlistTitleItem({ isCurrent, name, idList, date }) {
  return (
    <div className="flex flex-col items-start">
      <h2
        className={`text-xl font-semibold first-letter:uppercase ${
          isCurrent && "text-color-gold"
        }`}
      >
        {name}
      </h2>
      <div className="flex items-center space-x-1 font-normal text-sm text-color-info">
        <span>{idList.length} produits</span>
        <div className="w-1 h-1 bg-color-info rounded-full" />
        <span>Créée le {date}</span>
      </div>
    </div>
  );
}

export default WishlistTitleItem;
