import React, { Fragment, useId } from "react";

function PaginationComponent({ currentPage, pageNumber, handlePage }) {
  const id = useId();

  function PageButton({ index }) {
    return (
      <button
        className={`w-8 h-8 ${
          currentPage !== index + 1
            ? "bg-black text-white"
            : "bg-color-cancel-button text-black"
        } rounded-full`}
        onClick={() => handlePage(index + 1)}
      >
        {index + 1}
      </button>
    );
  }

  return (
    <div className="flex gap-4">
      <button
        className="flex flex-col  w-8 h-8 justify-center items-center bg-color-cancel-button text-black rounded-full"
        onClick={() => handlePage("previous")}
      >{`<`}</button>
      {Array.from({ length: pageNumber }, (_, i) =>
        pageNumber > 5 ? (
          <Fragment key={id}>
            {i < 4 || i === pageNumber - 1 ? (
              <PageButton index={i} />
            ) : (
              i === 4 && <span>...</span>
            )}
          </Fragment>
        ) : (
          <PageButton index={i} />
        )
      )}
      <button
        className="flex flex-col w-8 h-8 justify-center items-center bg-color-cancel-button text-black rounded-full"
        onClick={() => handlePage("next")}
      >{`>`}</button>
    </div>
  );
}

export default PaginationComponent;
