import { FormEvent, useRef } from "react";

/*
what makes this is an uncontrolled form is that the input values are not stored in the state
and it do not care about the input values

*/

export default function UncontrolledForms() {
  const nameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const hairColorInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const name = nameInput.current?.value;
    const age = ageInput.current?.value;
    const hairColor = hairColorInput.current?.value;

    console.log({ name, age, hairColor });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="number" placeholder="Age" ref={ageInput} />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        ref={hairColorInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
