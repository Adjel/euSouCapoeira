import Link from "next/link";
import React from "react";

function BreadcrumbLinkComponent({ className, link = "", children }) {
  console.log(link);
  return (
    <Link className={`text-base ${className}`} href={`/${link}`}>
      {children}
    </Link>
  );
}

export default BreadcrumbLinkComponent;
