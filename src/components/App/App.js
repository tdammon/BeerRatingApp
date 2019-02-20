import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import BeerRating from '../BeerRating/BeerRating';
import BarRating from '../BarRating/BarRating';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './index.css';
import {withStyles} from '@material-ui/core';

const styles = theme => ({
  
  grid: {
      
      height: '100%',  
  },
  
  
})
class App extends Component {

  componentDidMount () {
    console.log('fetch user')
    this.props.dispatch({type: 'FETCH_USER'})
    
  }

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.grid}>
          {/* <Nav /> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={HomePage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <Route
            exact
            path="/beerrating"
            component={BeerRating}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <Route
            exact
            path="/barrating"
            component={BarRating}
            />
            
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />

          
        </div>
      </Router>
  )}
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(withStyles(styles)(App));
