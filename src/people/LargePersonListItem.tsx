//Note that we are not implementing any styling here
// this component is only responsible for rendering the data but its styling is only from its parent component

import { PeopleProps } from "../type";

export interface LargePersonListItemProps {
  person: PeopleProps;
}

export default function LargePersonListItem({
  person: { age, hairColor, hobbies, name },
}: LargePersonListItemProps) {
  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies?.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}
