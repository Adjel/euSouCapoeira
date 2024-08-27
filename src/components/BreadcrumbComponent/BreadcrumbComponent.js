import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadcrumbLinkComponent from "../BreadcrumbLinkComponent";

function BreadCrumbComponent({ hrefLinkList, unClickableList = [] }) {
  const double = !hrefLinkList?.some((item) =>
    unClickableList.find(
      (item2) => item.display === item2 || item.link === item2
    )
  );

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLinkComponent className="uppercase">
            accueil
          </BreadcrumbLinkComponent>
        </BreadcrumbItem>
        {hrefLinkList?.map(
          ({ display, link }, index) =>
            display && (
              <div className="flex items-center gap-2.5 capitalize" key={index}>
                {/** avoid duplication */}
                {display !== hrefLinkList[index - 1]?.display && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <div>
                        <BreadcrumbLinkComponent
                          className="uppercase"
                          link={link}
                        >
                          {display}
                        </BreadcrumbLinkComponent>
                      </div>
                    </BreadcrumbItem>
                  </>
                )}
              </div>
            )
        )}
        {double &&
          unClickableList.map(
            (display, index) =>
              display && (
                <div
                  className="flex items-center gap-2.5 capitalize"
                  key={index}
                >
                  <BreadcrumbSeparator />
                  <BreadcrumbItem className="text-base uppercase">
                    {display}
                  </BreadcrumbItem>
                </div>
              )
          )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumbComponent;
