import React from 'react';
import './App.css';
import Hello from './Components/Hello';
import Image from './Components/Image';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Image/>
          <Image/>
        </div>
        <h1>
         Longboarding is fun        
         </h1>
         <Hello userInfo={{firstName: 'Kaya', lastName:'Johnson'}}/>
      </header>
    </div>
  );
}

export default App;
