import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

setInterval(() => {
  root.render(<App />);
}, 1000);
