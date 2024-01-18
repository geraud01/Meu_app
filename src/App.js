import * as React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import menu from `./components/menu`;

function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello world</Button> 
      <menu />
    </div>
  );
}

export default App;
