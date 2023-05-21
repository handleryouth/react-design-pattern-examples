import "./App.css";
import NumberedList from "./NumberedList";
import RegularList from "./RegularList";
import LargePersonListItem from "./people/LargePersonListItem";
import SmallPersonListItem from "./people/SmallPersonListItem";
import LargeProductListItem from "./products/LargeProductListItem";
import SmallProductListItem from "./products/SmallProductListItem";
import { PeopleProps, ProductProps } from "./type";

const people: PeopleProps[] = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products: ProductProps[] = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

function App() {
  return (
    <>
      {/*
        by using this code, we can use the same component to render different types of data
      more like reusable component
      */}

      {/*
        the point of this code is to show that we can make a lot of combinations of components
        by the time the app grows, we can save a lot of time by using this code
        */}
      <RegularList
        resourceName="person"
        items={people}
        itemComponent={SmallPersonListItem}
      />

      <NumberedList
        resourceName="person"
        items={people}
        itemComponent={LargePersonListItem}
      />

      <RegularList
        resourceName="product"
        items={products}
        itemComponent={SmallProductListItem}
      />

      <NumberedList
        resourceName="product"
        items={products}
        itemComponent={LargeProductListItem}
      />
    </>
  );
}

export default App;
