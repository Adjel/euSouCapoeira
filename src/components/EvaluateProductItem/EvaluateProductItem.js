import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { useEvalStore } from "@/stores/useEvalStore";
import Image from "next/image";
import NoteProductButton from "../NoteProductButton";
import { IoMdClose } from "react-icons/io";

function EvaluateProductItem({
  user,
  id,
  name,
  image,
  alt,
  title,
  comment,
  rate,
  productEvals,
}) {
  const { updateEval } = useEvalStore();
  const [newTitle, setNewTitle] = useState(title);
  const [newComment, setNewComment] = useState(comment);
  const [newRate, setNewRate] = useState(rate);

  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleIsEvaluating = () => {
    setIsEvaluating(!isEvaluating);
  };

  const handleCommentOnChange = (event) => {
    event.preventDefault();
    setNewComment(event.target.value);
  };

  const handleOnTitleChange = (event) => {
    event.preventDefault();
    setNewTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newRate) {
      toast({ title: "Vous devez attribuer une note" });
      return;
    }
    if (!newComment || newComment === "") {
      toast({ title: "Votre commentaire ne peut pas être vide" });
      return;
    }
    updateEval(user, id, newTitle, newComment, newRate);
    setNewTitle("");
    setNewComment("");
    setNewRate(undefined);
    setIsEvaluating(false);
    toast({ title: "Votre évaluation à été prise en compte" });
  };

  // TODO: SET THE ALREADY EXIST DATA FOR TITLE COMMENT AND NOTE !!

  return (
    <div className="flex flex-col gap-6 py-5 border-t border-b">
      <div className="flex gap-6">
        <Image
          className="ml-8 max-w-14 max-h-14 md:max-w-24 md:max-h-24"
          src={image}
          alt={alt}
        />
        <div className="flex flex-col w-full gap-4 justify-between">
          <div className="flex w-full p-4">
            <span>{name}</span>
          </div>
          <div className="flex w-full pl-4 justify-between items-center">
            <span className="font-bold">
              Ce produits à {productEvals.length} évaluations
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
              <NoteProductButton note={newRate} onClick={setNewRate} />
            </ul>
            <span className="w-1/4" />
          </div>
          <form className="flex flex-col w-full h-full gap-6 justify-center items-center ">
            <input
              className="w-full h-full p-4 border border-color-hover-cancel-button rounded-xl"
              type="text"
              name="title"
              id="title"
              value={newTitle}
              placeholder="Intitulé"
              onChange={(event) => handleOnTitleChange(event)}
            />
            <textarea
              className="w-full h-40 p-4 border border-color-hover-cancel-button rounded-xl"
              type="text"
              name="comment"
              if="comment"
              value={newComment}
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
