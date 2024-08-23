import React, { useEffect, useState } from "react";
import RatingComponent from "../RatingComponent";
import { useEvalStore } from "@/stores/useEvalStore";

function CommentsComponent({ productId }) {
  const { getProductEvals } = useEvalStore();
  const [productEvals, setProductEvals] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductEvals = async () => {
      try {
        const data = await getProductEvals(productId);
        setProductEvals(data);
      } catch (e) {
        throw e;
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductEvals();
  }, [productId, getProductEvals]);

  return isLoading ? (
    <div>Chargement des commentaires ...</div>
  ) : !productEvals ? (
    <p>Commentaires indisponibles</p>
  ) : (
    <section className="flex flex-col gap-4 ">
      <header className="flex flex-col gap-2">
        <h2 className="text-center text-2xl font-bold">
          <span>{productEvals.rates?.length}</span> Evaluations de clients
        </h2>
        <RatingComponent productId={productId} option="average" />
      </header>
      <h3 className="text-xl font-bold">
        <span>{productEvals.comments?.length}</span>
        {`${
          productEvals.comments?.length === 1 ? " commentaire" : " commentaires"
        }`}
      </h3>
      <ol className="flex flex-col gap-8">
        {productEvals.comments?.map(
          ({ title, authorName, comment, date, rating, id }) => (
            <li key={id ?? crypto.randomUUID()}>
              <div className="flex flex-row gap-3">
                <span className="flex justify-center items-center w-11 h-11 font-bold text-color-gold uppercase border-2 border-color-gold rounded-full">
                  {authorName?.charAt(0)}
                </span>
                <div className="flex flex-col">
                  <span>{title}</span>
                  <div className="flex flex-row gap-2 items-center text-color-dark-gray">
                    <RatingComponent userRate={rating} option="none" />
                    <span>{authorName}</span>
                    <span>{new Date(date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              {comment}
            </li>
          )
        )}
      </ol>
    </section>
  );
}

export default CommentsComponent;
