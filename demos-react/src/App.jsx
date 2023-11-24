import { useState } from 'react';
import './App.css';
import Hello from './Hello';
import Select from './Select';

function App() {
  const [name, setName] = useState('Titi');

  function handleChange(newName) {
    setName(newName);
  }

  return (
    <div className="App">
      <Hello name={name} />
      <Select
        value={name}
        items={['Toto', 'Titi', 'Tata']}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
