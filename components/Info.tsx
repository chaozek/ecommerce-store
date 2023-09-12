"use client";
import { Product } from "@/types";
import * as React from "react";
import { Currency } from "./ui/Currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/user-cart";

export interface IInfoProps {
  data: Product;
}

export function Info({ data }: IInfoProps) {
  const cart = useCart();
  const onAddTocart = () => {
    cart.addItem(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="text-semibold text-black">Size:</h3>
          <div>{data?.size.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="text-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{
              backgroundColor: data?.color?.value,
            }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddTocart}
          className="flex items-center gap-x-2 text-white"
        >
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
