import { useState, useEffect } from "react";

/*
  the main benefit of controlled form is that you can validate (feedback) the input before submitting the form
*/

export default function ControlledForm() {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("name must be at least 2 characters");
    } else {
      setNameInputError("");
    }
  }, [name]);

  return (
    <form>
      {nameInputError && <p>{nameInputError}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
