import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core';

const styles = theme => ({
})

class RecentlyRatedPage extends Component {

    state = {
    }

    componentDidMount() {
        this.props.dispatch({type: 'GET_RECENTLY_RATED'})
    }


render() {

    return(
    <div>
        <p>Hello</p>
        {JSON.stringify(this.props.ratings)}
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

export default connect(mapStateToProps)(withStyles(styles)(RecentlyRatedPage));