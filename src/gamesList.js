import React, { useEffect, useState } from "react";
import './index.css';

const GamesList = ({heading="GAMES", isSearch=false}) => {  

  const [games, setGames] = useState(null);
  const [searchedGames, setSearchedGames] = useState(null);
  const [error, setError] = useState(null);

  const updateSearch = (e) => {
    const input = e.target.value.toLowerCase();
    if (input.length < 1) return setSearchedGames(null);
    setSearchedGames(games.filter((game) => (game.title.toLowerCase()).includes(input)));
  };

  useEffect(() => {
    fetch("http://localhost:8000/games")
      .then(res => {
        if (!res.ok) throw Error("Could not fetch resource data");
        return res.json();
      })
      .then(data => {
        setError(null);
        setGames(data);
      })
      .catch((err) => setError(err.message))
  }, []);

  return (   
      <div className="content">
          <h1>{ heading }</h1>

          {/* Check if games fetch has loaded yet */}
          {!games ? (error ? <h2 style={{color:'red'}}>{ error }</h2> : <h2>Loading...</h2>)
            : 
            /* Check if it's a filtered games list */
            (isSearch ?
              <div>
                <input placeholder="Search here..." onChange={updateSearch}/>
                {/* Check if there are any found filtered games */}
                {searchedGames &&
                  (searchedGames.map((game) => (
                    <p key={ game.id }>{ game.title }</p>
                  )))
                }
              </div>             
              :
              /* Display all games list */
              <div>      
                {games.map((game) => (
                  <p key={ game.id }>{ game.title }</p>
                ))}
              </div> 
            )  
          }   
      </div>
  );
}

export default GamesList;
