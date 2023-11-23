import React from "react";

function App() {
  const name = 'Romain';
  const date = new Date();

  return (
    <div className="App">
      <p>Hello {name}</p>
      <p>It is {date.toLocaleTimeString()}</p>
    </div>
  );
}

export default App;