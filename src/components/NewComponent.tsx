import { useState } from "react";
export default function NewComponent() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((count) => count + 1);
    console.log("TEST");
  };
  return (
    <div>
      Hello New Component <button onClick={handleIncrement}>Increment</button> -{" "}
      {counter}
    </div>
  );
}
