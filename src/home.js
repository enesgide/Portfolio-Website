import React, { useState } from "react";
import './index.css';

function Home() {  
  const [name, setName] = useState('Enes');
  
  const handleClick = (newName) => {
    if (name == 'Enes') setName('Gide');
    else setName('Enes');
  };

  return (    
      <div className="content">
          <button onClick={() => handleClick('Gide')}>
            <p>My name is { name }</p>
          </button>
      </div>
  );
}

export default Home;
