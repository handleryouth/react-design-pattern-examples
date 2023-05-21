export interface NumberedListProps {
  items: any[];
  itemComponent: any;
  resourceName: any;
}

export default function NumberedList({
  itemComponent: ItemComponent,
  items,
  resourceName,
}: NumberedListProps) {
  return (
    <>
      {items.map((item: any, index: number) => {
        return (
          <>
            <h3>{index + 1}</h3>
            <ItemComponent key={index} {...{ [resourceName]: item }} />
          </>
        );
      })}
    </>
  );
}
