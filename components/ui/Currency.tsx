"use client";
import { formatter } from "@/lib/utils";
import * as React from "react";

export interface ICurrencyProps {
  value?: string | number;
}

export function Currency({ value }: ICurrencyProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}
