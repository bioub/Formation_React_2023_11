function App() {
  const name = 'Romain';
  const date = new Date();

  return (
    <>
      <p>Hello {name}</p>
      <p>It is {date.toLocaleTimeString()}</p>
    </>
  );
}

export default App;