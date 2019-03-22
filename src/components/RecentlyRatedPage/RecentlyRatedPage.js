import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core';
import RecentlyRatedCard from '../RecentlyRatedCard/RecentlyRatedCard';


const styles = theme => ({
    
})

class RecentlyRatedPage extends Component {

    state = {
        
    }

    componentDidMount() {
        this.props.dispatch({type: 'GET_RECENTLY_RATED'})
    }

    


render() {
    const {classes} = this.props
    return(
    <div>
        {/* {JSON.stringify(this.props.ratings)} */}
        {this.props.ratings.map((rating,index) => {
            return(
                <RecentlyRatedCard
                    key= {index}
                    aroma= {rating.aroma}
                    color={rating.color}
                    flavor={rating.flavor}
                    finish={rating.finish}
                    notes={rating.notes}
                    name={rating.name}
                    url={rating.url}
                    />
            )
        })}
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