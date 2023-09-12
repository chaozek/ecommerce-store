"use client";

import * as React from "react";
export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text- center text-xs text-black">
          &copy; 2023 PAYA shop{" "}
        </p>
      </div>
    </footer>
  );
}
