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
    backgroundColor: 'green'
},
  form: {
    backgroundColor: 'grey',
    width: '75%',
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40%',
    // marginLeft: '50%',
    // marginRight: '50%',
    padding: 20,
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
          <Typography>Register User</Typography>
          <TextField
            id="username"
            label="Username"
            className={classes.field}
            value={this.state.username}
            onChange={this.handleInputChangeFor('username')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="password"
            label="Password"
            className={classes.field}
            value={this.state.password}
            onChange={this.handleInputChangeFor('password')}
            margin="normal"
            variant="filled"
            />
            <div className={classes.buttonDisplay}>
            <Button variant="raised" onClick={this.registerUser} className={classes.button}>
                Register
            </Button>
            <Button variant="raised" onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}} className={classes.button}>
              Cancel
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