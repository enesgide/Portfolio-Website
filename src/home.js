import Navbar from './header.js'

import './index.css';
import './home.css';

function App() {  
  return (    
    <div className="App">
      <Navbar/>

      <div style={{textAlign:'center'}}>
        <Job salary={90000} position="Senior SDE" company="Amazon"/>
        <Job salary={12000} position="Junior SDE" company="Google"/>
        <Job salary={10000} position="Project Manager" company="Netflix"/>
      </div>
    </div>
  );
}

function Job(props) {
  return (
    <div>
      <h1>Company = {props.company}</h1>
      <h2>Position = {props.position}</h2>
      <h3>Salary = {props.salary}</h3>
    </div>
  );
}

export default App;
