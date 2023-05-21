import "./App.css";
import SplitScreen from "./SplitScreen";

export function LeftHandComponent({ name }: { name: string }) {
  return (
    <div
      style={{
        backgroundColor: "green",
      }}
    >
      {name}
    </div>
  );
}

export function RightHandComponent({ message }: { message: string }) {
  return (
    <div
      style={{
        backgroundColor: "red",
      }}
    >
      {message}
    </div>
  );
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="John" />
      <RightHandComponent message="Hello, world!" />
    </SplitScreen>
  );
}

export default App;
