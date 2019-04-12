import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withStyles, TextField, Button, Typography} from '@material-ui/core';

const styles = theme => ({
  root : {
    flexGrow: 1,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(https://s3.us-east-2.amazonaws.com/beerphotos/beer.jpg)`,
    backgroundSize : 'cover',
    alignItems: 'center',
},
  form: {
    backgroundColor: 'grey',
    width: '75%',
    opacity: '0.8',
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


class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        
        <form className={classes.form} onSubmit={this.registerUser}>
          <Typography component="h2" variant="headline">Register User</Typography>
          <TextField
            id="username"
            placeholder="Username"
            InputProps={{
              disableUnderline: true,
              style: {fontSize: '150%'} 
            }}
            className={classes.field}
            value={this.state.username}
            onChange={this.handleInputChangeFor('username')}
            margin="normal"
          />
          <TextField
            id="password"
            placeholder="Password"
            InputProps={{
              disableUnderline: true,
              style: {fontSize: '150%'} 
            }}
            className={classes.field}
            value={this.state.password}
            onChange={this.handleInputChangeFor('password')}
            margin="normal"
            />
            <div className={classes.buttonDisplay}>
            <Button variant="raised" onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}} className={classes.button}>
              Cancel
            </Button>
            <Button variant="raised" onClick={this.registerUser} className={classes.button}>
                Register
            </Button>
          </div>
        </form>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
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

export default connect(mapStateToProps)(withStyles(styles)(RegisterPage));