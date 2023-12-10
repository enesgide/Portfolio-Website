import { Link } from 'react-router-dom'

const NotFound = () => {
    return (        
        <div>
            <h1>Error 404: Page Not Found</h1>
            <Link to="/">
                <button>
                    Return to home
                </button>
            </Link>
        </div>
    )
}

export default NotFound;