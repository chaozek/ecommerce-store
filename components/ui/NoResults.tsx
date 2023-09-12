import * as React from "react";

export interface INoResultsProps {}

export function NoResults(props: INoResultsProps) {
  return (
    <div className="flex items-center justify-center h-full w-full  text-neutral-500">
      {" "}
      No results
    </div>
  );
}
