export interface RegularListProps {
  items: any[];
  itemComponent: any;
  resourceName: any;
}

export default function RegularList({
  itemComponent: ItemComponent,
  items,
  resourceName,
}: RegularListProps) {
  return (
    <>
      {items.map((item: any, index: any) => {
        return <ItemComponent key={index} {...{ [resourceName]: item }} />;
      })}
    </>
  );
}
