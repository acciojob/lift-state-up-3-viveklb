import React from "react";

const ChildComponent2 = ({ selectedOption, onSelect }) => (
  <section className="child">
    <h2>Child Component 2</h2>
    <button
      type="button"
      aria-pressed={selectedOption === "Option 2"}
      onClick={() => onSelect("Option 2")}
    >
      Select Option 2
    </button>
  </section>
);

export default ChildComponent2;