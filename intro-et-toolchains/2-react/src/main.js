function App() {
  const name = 'Romain';
  const date = new Date();

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('p', null, 'Hello ', name),
    React.createElement('div', null, date.toLocaleTimeString()),
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App());

setInterval(() => {
  root.render(App());
}, 1000);
