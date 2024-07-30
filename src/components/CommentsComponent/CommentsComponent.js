import React from "react";
import RatingComponent from "../RatingComponent";

function CommentsComponent({ comments, rates }) {
  return (
    <section className="flex flex-col gap-4 ">
      <header className="flex flex-col gap-2">
        <h2 className="text-center text-2xl font-bold">
          <span>{rates?.length}</span> Evaluations de clients
        </h2>
        <RatingComponent rateList={rates} />
      </header>
      <h3 className="text-xl font-bold">
        <span>{comments?.length}</span>
        {`${comments?.length === 1 ? " commentaire" : " commentaires"}  `}
      </h3>
      <ol className="flex flex-col gap-8">
        {comments?.map(({ title, authorName, comment, date, rating, id }) => (
          <li key={id}>
            <div className="flex flex-row gap-3">
              <span className="flex justify-center items-center w-11 h-11 font-bold text-color-gold uppercase border-2 border-color-gold rounded-full">
                {authorName?.charAt(0)}
              </span>
              <div className="flex flex-col">
                <span>{title}</span>
                <div className="flex flex-row gap-2 items-center text-color-dark-gray">
                  <RatingComponent userRate={rating} />
                  <span>{authorName}</span>
                  <span>{date.toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            {comment}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default CommentsComponent;
