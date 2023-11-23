import App from "./App.js";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(App());

setInterval(() => {
  root.render(App());
}, 1000);
