import React, { useState } from "react";

function Example() {
  const [array, setArray] = useState([{ id: 1, name: "Item 1" }]);

  const addObject = () => {
    setArray([...array, { id: array.length + 1, name: `Item ${array.length + 1}` }]);
  };

  return (
    <div>
      <ul>
        {array.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addObject}>Add Object</button>
    </div>
  );
}

export default Example;