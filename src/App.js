import './App.css';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Startup from './components/Startup/Startup';
import Register from './components/Register Startup/Register';
import Client from './components/Client/Client';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

/*require('dotenv').config()*/


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login">
          <Login />
        </Route>
        <Route path = "/signup">
          <Signup />
        </Route>    
        <Route path = "/home">
          <Home />
        </Route>
        <Route path = "/dashboard/startup">
          <Startup />
        </Route> 
        <Route path = "/dashboard/st/register">
          <Register />
        </Route>             
        <Route path = "/dashboard/client">
          <Client />
        </Route>             
      </div>
    </Router>
  );
}

export default App;
