import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { useEvalStore } from "@/stores/useEvalStore";
import Image from "next/image";
import NoteProductButton from "../NoteProductButton";
import { IoMdClose } from "react-icons/io";

function EvaluateProductItem({ user, product }) {
  let productEval;
  const { updateEval, getUserProductEvals } = useEvalStore();
  const [title, setTitle] = useState(productEval?.title ?? "");
  const [comment, setComment] = useState(productEval?.comment ?? "");
  const [note, setNote] = useState(productEval?.rate ?? "");

  const [isEvaluating, setIsEvaluating] = useState(false);

  useEffect(() => {
    productEval = getUserProductEvals();
  }, [product]);

  const handleIsEvaluating = () => {
    if (isEvaluating === true) {
      setNote(0);
      setTitle("");
      setComment("");
    }

    setIsEvaluating(!isEvaluating);
  };

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
    if (!note) {
      toast({ title: "Vous devez attribuer une note" });
      return;
    }
    if (!comment || comment === "") {
      toast({ title: "Votre commentaire ne peut pas être vide" });
      return;
    }
    updateEval(user, product.id, title, comment, note);
    setTitle("");
    setComment("");
    setNote(undefined);
    setIsEvaluating(false);
    toast({ title: "Votre évaluation à été prise en compte" });
  };

  // TODO: SET THE ALREADY EXIST DATA FOR TITLE COMMENT AND NOTE !!

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <Image
          className="ml-8 max-w-14 max-h-14 md:max-w-24 md:max-h-24"
          src={product.images[0].image}
          alt={product.images[0].alt}
        />
        <div className="flex flex-col w-full gap-4 justify-between">
          <div className="flex w-full p-4">
            <span>{product.name}</span>
          </div>
          <div className="flex w-full pl-4 justify-between items-center">
            <span className="font-bold">
              Ce produits à {updateEval.length} évaluations
            </span>
            {!isEvaluating ? (
              <Button onClick={handleIsEvaluating} className="w-fit mr-6">
                évaluer
              </Button>
            ) : (
              <button
                onClick={handleIsEvaluating}
                className="bg-black rounded-full w-14 h-14 mr-6 text-white flex justify-center items-center hover:bg-color-gold"
              >
                <IoMdClose className="w-8 h-auto" />
              </button>
            )}
          </div>
        </div>
      </div>
      {isEvaluating && (
        <div className="flex flex-col p-4 gap-4">
          <div className="flex justify-between items-center">
            <span className="w-1/4 text-center font-bold">Note</span>
            <ul className="flex w-2/4 gap-5 justify-center">
              <NoteProductButton note={note} onClick={setNote} />
            </ul>
            <span className="w-1/4" />
          </div>
          <form className="flex flex-col w-full h-full gap-6 justify-center items-center ">
            <input
              className="w-full h-full p-4 border border-color-hover-cancel-button rounded-xl"
              type="text"
              name="title"
              value={title}
              placeholder="Intitulé"
              onChange={(event) => handleOnTitleChange(event)}
            />
            <textarea
              className="w-full h-40 p-4 border border-color-hover-cancel-button rounded-xl"
              type="text"
              name="comment"
              value={comment}
              placeholder="Votre commentaire"
              onChange={(event) => handleCommentOnChange(event)}
            />
            <Button
              className="w-fit"
              type="submit"
              onClick={(event) => handleSubmit(event)}
            >
              Sauvegarder mon évaluation
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EvaluateProductItem;
