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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());

setInterval(() => {
  root.render(App());
}, 1000);
