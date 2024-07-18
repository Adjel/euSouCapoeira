import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function BreadCrumbComponent({ hrefLinkList, unClickableList = [] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">accueil</BreadcrumbLink>
        </BreadcrumbItem>
        {hrefLinkList.map(
          (link, index) =>
            link && (
              <div className="flex items-center gap-2.5" key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${link}`}>{link}</BreadcrumbLink>
                </BreadcrumbItem>
              </div>
            )
        )}
        {unClickableList.map(
          (link, index) =>
            link && (
              <div className="flex items-center gap-2.5" key={index}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>{link}</BreadcrumbItem>
              </div>
            )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumbComponent;
