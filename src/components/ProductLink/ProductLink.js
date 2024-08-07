import React from "react";
import Link from "next/link";

function ProductLink({ id, name, children }) {
  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: { productId: id, productName: name },
      }}
    >
      {children}
    </Link>
  );
}

export default ProductLink;
