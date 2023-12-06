import React, { useEffect, useState } from "react";
import useFetch from '../scripts/useFetch.js'
import { getIdFromUsername, getGamesFromId } from '../scripts/robloxEndpoints.js'

const GamesList = ({heading="GAMES", isSearch=false}) => {  
  // Load pre-set games from json db
  const { data: games, isPending, error } = useFetch("http://localhost:8000/games");

  // Load user games
  /*const username = "MuPower";
  const [userId, setUserId] = useState(null);
  const [userGames, setUserGames] = useState(null);

  useEffect(() => {
    getIdFromUsername(username)
      .then(id => {
        setUserId(id);
      })
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    if (userId) {
      getGamesFromId(userId)
        .then(id => {
          setUserId(id);
        })
        .catch(err => console.log(err))
    }    
  }, [userId]);*/

  // Search games
  const [searchedGames, setSearchedGames] = useState([]);

  const updateSearch = (e) => {
    const input = e.target.value.toLowerCase();
    if (input.length < 1) return setSearchedGames(null);
    setSearchedGames(games.filter((game) => (game.title.toLowerCase()).includes(input)));
  };

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
          <div>      
            {games.map((game) => (
              <p key={ game.id }>{ game.title }</p>
            ))}
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
