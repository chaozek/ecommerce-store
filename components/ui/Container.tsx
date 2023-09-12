import * as React from "react";

export interface IContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: IContainerProps) {
  return <div className="mx-auto max-w-7xl">{children}</div>;
}
