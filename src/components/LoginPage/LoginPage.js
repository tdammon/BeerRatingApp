import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles, TextField, Button, Typography} from '@material-ui/core';
import Image from '/Users/trevor/Coding/Beer/beer/src/public/beerPic.jpg'

const styles = theme => ({
  root : {
    flexGrow: 1,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${Image})`,
    backgroundSize : 'cover',
    alignItems: 'center'
},
  form: {
    backgroundColor: 'grey',
    opacity: '0.8',
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    // marginTop: '40%',
    // marginBottom: '50%',
    padding: 20,
    paddingTop: 35,
    minHeight: 200,
  },
  field: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonDisplay: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 10,
  },
  button: {
    display: 'inline-block',
  }
})

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        {/* {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )} */}
        <form className={classes.form} onSubmit={this.login}>
        <Typography component="h2" variant="headline">Login</Typography>
          <TextField
            id="username"
            // label="Username"
            placeholder="Username"
            InputProps={{
              disableUnderline: true,
              style: {fontSize: '150%'} 
            }}
            className={classes.field}
            value={this.state.username}
            onChange={this.handleInputChangeFor('username')}
            margin="normal"
            // variant="filled"
          />
          <TextField
            id="password"
            // label="Password"
            placeholder="Password"
            InputProps={{
              disableUnderline: true,
              style: {fontSize: '150%'} 
            }}
            className={classes.field}
            value={this.state.password}
            onChange={this.handleInputChangeFor('password')}
            margin="normal"
            // variant="filled"
            />
         <div className={classes.buttonDisplay}>
            <Button variant="raised" onClick={this.login} className={classes.button}>
                Login
            </Button>
            <Button variant="raised" onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}} className={classes.button}>
              Register
            </Button>
          </div>
        </form>
        
          
        
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(withStyles(styles)(LoginPage));