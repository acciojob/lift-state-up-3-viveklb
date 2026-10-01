
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p aria-live="polite">
        Selected option: {selectedOption || "None"}
      </p>
      <div className="children">
        <ChildComponent1
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
        />
        <ChildComponent2
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
        />
      </div>
    </div>
  )
}

export default App
