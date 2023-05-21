//Note that we are not implementing any styling here
// this component is only responsible for rendering the data but its styling is only from its parent component

import { PeopleProps } from "../type";

export interface SmallPersonListItemProps {
  person: PeopleProps;
}

export default function SmallPersonListItem({
  person: { age, name },
}: SmallPersonListItemProps) {
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
}
