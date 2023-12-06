import NavBar from './components/header.jsx'
import Home from './views/home.jsx'
import Games from './views/games.jsx'
import Projects from './views/projects.jsx'
import Contact from './views/contact.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {  
  return (    
    <Router>
      <div className="App">
        <NavBar/>
        <div className="Content">
          <Switch>
            <Route exact path="/"> <Home/> </Route>
            <Route path="/games"> <Games/> </Route>
            <Route path="/projects"> <Projects/> </Route>
            <Route path="/contact"> <Contact/> </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
