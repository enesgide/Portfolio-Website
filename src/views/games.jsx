import { useParams } from 'react-router-dom'
import useFetch from '../scripts/useFetch.js'

const Games = () => {
    return (
        <div className="content">
            <h1>Games page</h1>

            <div className="game-container">

            </div>
        </div>
    )
}

const GameItem = (props) => {
    return (
        <div style={{height: '100px', width: '100px', display: 'flex', justifyContent: 'flex-start'}}> {/* Container */}

        </div>
    )
}

export const Game = () => {
    const { id } = useParams();
    const { data: game, isPending, error } = useFetch("http://localhost:8000/games/" + id);

    return (
        <div>
            {/* Check if games are loading */}
            { isPending && <h2>Loading...</h2> }

            {/* Check if games errored */}
            { error && <h2 style={{color:'red'}}>{ error }</h2> }

            { game &&
                <div>
                    <h1>Title: { game.title }</h1> 
                    <h1>ID: { id }</h1> 
                </div>               
            }
            
        </div>
    )
}

export default Games;