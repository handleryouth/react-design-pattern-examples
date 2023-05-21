import { ProductProps } from "../type";

export interface LargeProductListItemProps {
  product: ProductProps;
}

export default function LargeProductListItem({
  product: { name, price, description, rating },
}: LargeProductListItemProps) {
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <h3>Average Rating: {rating}</h3>
    </>
  );
}
