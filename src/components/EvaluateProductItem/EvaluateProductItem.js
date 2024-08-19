import React, { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { useEvalStore } from "@/stores/useEvalStore";
import Image from "next/image";
import { LiaStarSolid } from "react-icons/lia";

function EvaluateProductItem({ user, product }) {
  const { updateEval } = useEvalStore();
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [note, setNote] = useState();

  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleCommentOnChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const handleOnTitleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!comment || comment === "") {
      //TODO ?
      //toast({ title: "Votre commentaire ne peut pas être vide" });
    }
    if (!note) {
      toast({ title: "Vous devez attribuer une note" });
      return;
    }
    updateEval(user, productId, title, comment, note);
    setTitle("");
    setComment("");
    setNote(undefined);
  };

  // TODO: SET THE ALREADY EXIST DATA FOR TITLE COMMENT AND NOTE !!

  return (
    <div className="flex flex-col gap-6 border-2 border-pink-400">
      <div className="flex gap-6 border-2 border-blue-600">
        <Image
          className="ml-8 max-w-14 max-h-14 md:max-w-24 md:max-h-24"
          src={product.images[0].image}
          alt={product.images[0].alt}
        />
        <div className="flex flex-col w-full gap-4 justify-between border-2 border-green-600">
          <div className="flex w-full p-4">
            <span>{product.name}</span>
          </div>
          <div className="flex w-full pl-4 justify-between">
            <span>Ce produits à {updateEval.length} évaluations</span>
            {!isEvaluating ? (
              <Button className="w-fit mr-6"> évaluer</Button>
            ) : (
              <Button className="w-fit mr-6"></Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 gap-4 border-2 border-blue-600">
        <div className="flex justify-between items-center border-2 border-green-600">
          <span className="w-1/4 text-center">Note</span>
          <ul className="flex w-2/4 gap-5 justify-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <li>
                <LiaStarSolid
                  className="w-8 md:w-10 lg:w-12 h-auto fill-color-gold"
                  key={index}
                  onClick={() => setNote(index + 1)}
                />
              </li>
            ))}
          </ul>
          <span className="w-1/4" />
        </div>
        <form className="flex flex-col w-full h-full gap-6 justify-center items-center ">
          <input
            className="w-full h-full p-4 border border-color-hover-cancel-button rounded-xl"
            type="text"
            name="title"
            value={comment}
            placeholder="votre commentaire"
            onChange={(event) => handleOnTitleChange(event)}
          />
          <textarea
            className="w-full h-40 p-4 border border-color-hover-cancel-button rounded-xl"
            type="text"
            name="comment"
            value={comment}
            placeholder="votre commentaire"
            onChange={(event) => handleCommentOnChange(event)}
          />
          <Button
            className="w-fit"
            type="submit"
            onClick={(event) => handleSubmit(event)}
          >
            evaluate
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EvaluateProductItem;
