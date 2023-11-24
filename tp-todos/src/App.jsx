import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Todos from './Todos';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> <Link to="/about">About</Link>{' '}
          <Link to="/todos">Todos</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
