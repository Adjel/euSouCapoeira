import React from "react";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

function ArrowButton({ href, text }) {
  return (
    <Link href={href}>
      <Button className="flex w-fit gap-3">
        {text}
        <FaLongArrowAltRight />
      </Button>
    </Link>
  );
}

export default ArrowButton;
