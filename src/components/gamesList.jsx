import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from '../scripts/useFetch.js'
import { handleDrag, duplicateGames } from '../scripts/gamesContainer.js'
// import { getIdFromUsername, getGamesFromId } from '../scripts/robloxEndpoints.js'

const GamesList = ({heading="GAMES", isSearch=false}) => {  
  // Load pre-set games from json db
  const { data: games, isPending, error } = useFetch("http://localhost:8000/games");

  // Search games
  const [searchedGames, setSearchedGames] = useState([]);

  const updateSearch = (e) => {
    const input = e.target.value.toLowerCase();
    if (input.length < 1) return setSearchedGames(null);
    setSearchedGames(games.filter((game) => (game.title.toLowerCase()).includes(input)));
  };

  // Setup games container dragger
  useEffect(() => {
    if (!games) return;
    handleDrag();
  }, [games]);

  // Duplicate start and end game items
  const loopedGames = games ? duplicateGames(games, 5) : [];

  return (   
    <div className="content" style={{marginLeft:'3%'}}>
      {/* <h1>{ userId }</h1> */}

      <h1 style={{fontFamily:'Poppins', letterSpacing:'-0.02em'}}>{ heading }</h1>

      {/* Check if games are loading */}
      { isPending && <h2>Loading...</h2> }

      {/* Check if games errored */}
      { error && <h2 style={{color:'red'}}>{ error }</h2> }

      {/* Check if games have loaded */}
      { games &&
        (!isSearch ?
          /* Display all games */
          <div className="games-container">
            <div className="slider">
              {loopedGames.map((game) => (
                <div id="game-item" key={ game.id }>
                  <Link to={`/games/${ game.id }`}>
                    { game.title }
                  </Link>                
                </div>
              ))}                           
            </div>  
            <button id="left-btn" style={{position: 'absolute', top: '50%', left: '0', transform: 'translateX(-50%) translateY(-50%)'}}>Left</button>  
            <button id="right-btn" style={{position: 'absolute', top: '50%', right: '0', transform: 'translateX(50%) translateY(-50%)'}}>Right</button>
          </div>
          :
          /* Display searched games */
          <div>
          <input placeholder="Search here..." onChange={updateSearch}/>
          {searchedGames &&
            (searchedGames.map((game) => (
              <p key={ game.id }>{ game.title }</p>
            )))
          }
        </div>
        )
      }

      {/* Loaded: Display games search list */}
        
    </div>
  );
}

export default GamesList;
