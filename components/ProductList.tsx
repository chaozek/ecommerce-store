import { Product } from "@/types";
import * as React from "react";
import { NoResults } from "./ui/NoResults";
import { ProductCard } from "./ui/ProductCard";

export interface IProductListProps {
  title: string;
  items: Product[];
}

export function ProductList({ title, items }: IProductListProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl ">{title}</h3>
      {items.length == 0 && <NoResults />}
      <div className="grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          return <ProductCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}
