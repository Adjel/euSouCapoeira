import React from "react";
import Link from "next/link";

function ProductLink({ id, params, children }) {
  return <Link href={`${params.products}/${id}`}>{children}</Link>;
}

export default ProductLink;
