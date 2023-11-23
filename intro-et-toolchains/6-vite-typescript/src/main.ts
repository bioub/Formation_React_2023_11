import App from "./App.tsx";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(App());

setInterval(() => {
  root.render(App());
}, 1000);
