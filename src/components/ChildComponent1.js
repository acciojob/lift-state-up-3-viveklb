import React from "react";

const ChildComponent1 = ({ selectedOption, onSelect }) => (
  <section className="child">
    <h2>Child Component 1</h2>
    <button
      type="button"
      aria-pressed={selectedOption === "Option 1"}
      onClick={() => onSelect("Option 1")}
    >
      Select Option 1
    </button>
  </section>
);

export default ChildComponent1;