import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages/Home/home";
import Register from "./pages/Register/register";
import Login from "./pages/Login/login";
import Upload from "./pages/Upload/upload";
import Profile from "./pages/Profile/profile";
import AboutMe from "./pages/AboutMe/aboutme";
import Logout from "./pages/Logout/Logout";
import Scroll from './components/scroll'
import StickyFooter from './components/footer'

function App() {
  return (
    <Router>
      <div className="App">
        
<Scroll showBelow={10} />
       
        <Navbar />

        <Switch>        
        <Router>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/register" exact render={() => <Register />} />
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/upload" exact render={() => <Upload />} />
        <Route path="/profile" exact render={() => <Profile />} />
        <Route path="/aboutme" exact render={() => <AboutMe/>} />
        <Route path="/logout" exact render={() => <Logout/>} />
        <StickyFooter />
      </Router>
        </Switch>
     
  
      
      </div>
    </Router>
  );


}


export default App;
