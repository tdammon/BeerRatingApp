import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core';


const styles = theme => ({
    
})

class AccountPage extends Component {

    state = {
        
    }

render() {
    const {classes} = this.props
    return(
        <div>
        
        </div>
    )
}
};
const mapStateToProps = state => ({
    scores: state.ScoreReducer,
    user: state.userReducer,
    beer: state.setBeerListReducer,
    ratings: state.setRatingsReducer,
  });

export default connect(mapStateToProps)(withStyles(styles)(AccountPage));