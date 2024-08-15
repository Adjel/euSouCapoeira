import React, { useState } from "react";
import { Button } from "../ui/button";
import { updateEval } from "@/providers/productEvaluationProvider";

function EvaluateProductItem({ user, name, id }) {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [note, setNote] = useState(0);

  const handleCommentOnChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const handleSubmit = (event, productId) => {
    event.preventDefault();
    if (!comment || comment === "") return;
    updateEval(user, productId, title, comment, note);
    setTitle("");
    setComment("");
    setNote(0);
  };

  return (
    <>
      <span>{name}</span>
      <Button>evaluate</Button>
      <form
        onSubmit={(event) => handleSubmit(event, id)}
        className="w-full h-full"
      >
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
