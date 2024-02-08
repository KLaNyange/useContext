
import { createContext, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';

export const AppContext = createContext()
function App() {
  const [name, setName] = useState('Alixe')
  let chien = 'Wouaf'
  return (
    <>
      <AppContext.Provider value={[chien, name]}>
        <Card />
      </AppContext.Provider>
    </>
  );
}

export default App;
