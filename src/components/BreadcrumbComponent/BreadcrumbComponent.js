import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function BreadCrumbComponent({ hrefLinkList, unClickableList = [] }) {
  console.log(hrefLinkList);
  console.log(unClickableList);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">accueil</BreadcrumbLink>
        </BreadcrumbItem>
        {hrefLinkList?.map(
          ({ display, link }, index) =>
            display && (
              <div className="flex items-center gap-2.5 capitalize" key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${link}`}>{display}</BreadcrumbLink>
                </BreadcrumbItem>
              </div>
            )
        )}
        {unClickableList.map(
          (display, index) =>
            display && (
              <div className="flex items-center gap-2.5 capitalize" key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>{display}</BreadcrumbItem>
              </div>
            )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumbComponent;
