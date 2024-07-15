import React from "react";
import RatingComponent from "../RatingComponent";
import { getSingleOrPluralOneWordString } from "@/lib/utils";

function CommentsComponent({ comments }) {
  return (
    <section className="border-2 border-red-600">
      {getSingleOrPluralOneWordString(comments?.length, "Commentaire")}
      {comments?.map(({ author, comment, date, rating }) => (
        <>
          <div className="border-2 border-pink-400">
            <div className="border-2 border-green-500">
              <div className="flex flex-col">
                <RatingComponent rate={rating} />
                {author}
                {date.toLocalDateString()}
              </div>
            </div>
            {comment}
          </div>
        </>
      ))}
    </section>
  );
}

export default CommentsComponent;
