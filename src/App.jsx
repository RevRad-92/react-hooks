import { useState } from 'react';
import ContadorHooks from './components/ContadorHooks/ContadorHooks';

function App() {
  // useState -> Hook. Devuelve dos elementos: variable y función.
  // destructuring
  const [ prendido, setPrendido ] = useState(false); 
  
  return (
    <div className='App'>
      <button onClick={() => setPrendido(!prendido)}>Switch Component</button>
      {
        prendido && (
          <ContadorHooks initialValue={73} />
        )
      }
    </div>
  );
}

export default App;
