import NavBar from './components/header.jsx'
import Home from './views/home.jsx'
import Games, { Game } from './views/games.jsx'
import Projects from './views/projects.jsx'
import Contact from './views/contact.jsx'
import NotFound from './views/notFound.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {  
  return (    
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>                    
            <Route exact path="/"> <Home/> </Route>            
            <Route exact path="/games"> <Games/> </Route>       
            <Route exact path="/games/:id"> <Game/> </Route>     
            <Route path="/projects"> <Projects/> </Route>
            <Route path="/contact"> <Contact/> </Route>
            <Route path="*"> <NotFound/> </Route> 
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
