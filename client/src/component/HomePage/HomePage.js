import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from "react-router"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFoods } from "../../redux/reducers/food-reducer";

import SearchFood from '../Search/Search';
import SelectedFoods from '../SelectedFoods';
import SearchResult from '../Search/SearchResult';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import requiresAuth from '../../HOC/requiresAuth';

const HomePage = (props) => {
    //57:40
    // const getTasks = (state) => {
    //   return state.todo.tasks
    // }

    // const reduxTasks = useSelector(getTasks);
    const dispatch = useDispatch();

    useEffect(() => {
      axios.get('/foods')
      .then(res => {
          console.log(res);
          dispatch(setFoods(res.data.data)); 
      }); 
    },[])
    
    const currentUser = useSelector(state => state.user.user);
    const filteredFoods = useSelector(state => state.foods.foods);

    return (
      <div className="App">
        <nav className="topnav">
          <ul>
            <li>
              <Link className="link" to="/select">Search</Link>
            </li>
            <li>
              <Link className="link" to="/selected">Selected</Link>
            </li>
            <li>
              <Link className="link" to="/login">Logout {currentUser}</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/select">
              <Typography component="h1" variant="h5">Search</Typography>
              <SearchFood />
          </Route>
          <Route path="/selected">
              <Typography component="h1" variant="h5">Hello {currentUser}, here is the list of your selected foods:</Typography>
              <SelectedFoods />
          </Route>
          <Route path="/searchresult">
              <Typography component="h1" variant="h5">Hello {currentUser}, here is your search result:</Typography>
              <SearchResult />
          </Route>
          <Route>
              <Redirect to="select" />
          </Route>        
        </Switch>
      </div>
    );
}

export default requiresAuth(HomePage);