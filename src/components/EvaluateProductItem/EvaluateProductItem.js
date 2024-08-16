import React, { useState } from "react";
import { Button } from "../ui/button";
import { updateEval } from "@/providers/productEvaluationProvider";
import { toast } from "../ui/use-toast";

function EvaluateProductItem({ user, name, productId }) {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [note, setNote] = useState();

  const handleCommentOnChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
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
    <>
      <div className="flex flex-row gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Button key={index} onClick={() => setNote(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
      <span>{name}</span>
      <Button>evaluate</Button>
      <form onSubmit={(event) => handleSubmit(event)} className="w-full h-full">
        <input
          className="w-full h-full"
          type="text"
          name="comment"
          value={comment}
          placeholder="votre commentaire"
          onChange={(event) => handleCommentOnChange(event)}
        ></input>
      </form>
    </>
  );
}

export default EvaluateProductItem;
