import React from "react";

function Label({ title, content, status }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm uppercase text-color-dark-gray">{title}</div>
      {!status ? (
        <div className="first-letter:uppercase">{content}</div>
      ) : (
        <div
          className={`first-letter:uppercase ${
            status === "processed"
              ? "text-green-400"
              : status === "under treatment"
              ? "text-blue-400"
              : status === "warning"
              ? "text-yellow-400"
              : status === "error"
              ? "text-red-400"
              : status === "return"
              ? "text-violet-400"
              : ""
          }`}
        >
          {status === "processed"
            ? "traitée"
            : status === "under treatment"
            ? "en cours de traitement"
            : status === "warning"
            ? "validation en attente"
            : status === "error"
            ? "traitement impossible"
            : status === "return"
            ? "retour en cours de traitement"
            : status !== "" && status !== undefined
            ? "unknown"
            : ""}
        </div>
      )}
    </div>
  );
}

export default Label;
