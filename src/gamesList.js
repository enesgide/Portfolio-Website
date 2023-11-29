import React, { useState } from "react";
import './index.css';

const GamesList = ({heading="GAMES", isSearch=false}) => {  
  const games = [
    {id: 1, title: "Pet Simulator"},
    {id: 2, title: "Epic Obby"},
    {id: 3, title: "Fun Obby"},
    {id: 4, title: "Balloon Simulator"},
    {id: 5, title: "Hamster Simulator"},
  ];

  const [searchedGames, setSearchedGames] = useState([])

  const updateSearch = (e) => {
    const input = e.target.value.toLowerCase();
    if (input.length < 1) return setSearchedGames([]);
    setSearchedGames(games.filter((game) => (game.title.toLowerCase()).includes(input)))
  };

  return (   
      <div className="content">
          <h1>{ heading }</h1>
          {isSearch ?
            <div>
              <input placeholder="Search here..." onChange={updateSearch}/>
              {searchedGames.map((game) => (
                <p>{ game.title }</p>
              ))}
            </div>             
            :
            <div>
              {games.map((game) => (
                <p>{ game.title }</p>
              ))}
            </div> 
          }          
      </div>
  );
}

export default GamesList;
