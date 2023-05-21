import React from "react";
import { ProductProps } from "../type";

export interface SmallProductListItemProps {
  product: ProductProps;
}

export default function SmallProductListItem({
  product: { name, price },
}: SmallProductListItemProps) {
  return (
    <>
      <h3>
        {name} - {price}
      </h3>
    </>
  );
}
