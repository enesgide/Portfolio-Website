import React, { useState } from "react";
import GamesList from '../components/gamesList.jsx'

function Home() {  
  const [name, setName] = useState('Enes');
  
  const handleClick = (newName) => {
    if (name === 'Enes') setName('Gide');
    else setName('Enes');
  };

  return (    
      <div className="content">
          <button onClick={() => handleClick('Gide')}>
            <p>My name is { name }</p>
          </button>

          <GamesList heading="MY GAMES"/>

          <GamesList heading="SEARCH FOR GAMES" isSearch={true}/>
          {/* <GamesList heading="SEARCH FOR GAMES" isSearch={true}/> */}
      </div>
  );
}

export default Home;
