import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddAdmin from './components/AddAdmin/AddAdmin';
import Admin from './components/Admin/Admin';
import CheckOut from './components/CheckOut/CheckOut';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageProducts from './components/ManageProducts/ManageProducts';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute path='/orders'>
            <Orders />
          </PrivateRoute>
          <PrivateRoute path='/checkout/:id'>
            <CheckOut />
          </PrivateRoute>
          <Route path='/checkout'>
            <Home />
          </Route>
          <PrivateRoute path='/addAdmin'>
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin />
          </PrivateRoute>
          <PrivateRoute path='/manage_products'>
            <ManageProducts />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
