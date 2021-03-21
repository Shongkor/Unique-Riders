import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import LogIn from './Components/LogIn/LogIn';
import RideDetails from './Components/RideDetails/RideDetails';
import SignUp from './Components/SignUp/SignUp';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/destination'>
          <Destination></Destination>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <PrivateRoute path='/better-ride/:name'>
            <RideDetails></RideDetails>
          </PrivateRoute>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
