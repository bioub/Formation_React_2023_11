import { createRoot } from './similar-to-react.js';

function App() {
  const name = 'Romain';
  const date = new Date();

  const pEl = document.createElement('p');
  pEl.append('Hello ', name);

  const divEl = document.createElement('div');
  divEl.append(date.toLocaleTimeString());

  return [pEl, divEl];
}

const root = createRoot(document.getElementById('root'));
root.render(App());

setInterval(() => {
  root.render(App());
}, 1000);
