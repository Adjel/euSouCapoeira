import React from "react";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

function ArrowButton({
  href = "",
  text,
  children,
  isReverse = false,
  className,
  ...props
}) {
  return (
    <Link href={href}>
      <Button
        className={`${
          isReverse &&
          "flex-row-reverse bg-white text-black border border-black"
        } flex w-fit gap-3`}
        {...props}
      >
        {text ?? children}
        <FaLongArrowAltRight className={`${isReverse && "rotate-180"}`} />
      </Button>
    </Link>
  );
}

export default ArrowButton;
