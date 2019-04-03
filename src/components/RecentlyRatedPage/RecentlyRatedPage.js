import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button'
import RecentlyRatedCard from '../RecentlyRatedCard/RecentlyRatedCard';


const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        width: '100%',
        backgroundImage: `url(https://s3.us-east-2.amazonaws.com/beerphotos/beer.jpg)`,
        backgroundSize : 'cover',
    }
})

class RecentlyRatedPage extends Component {

    state = {
        
    }

    componentDidMount() {
        this.props.dispatch({type: 'GET_RECENTLY_RATED'})
    }

    


render() {
    const {classes} = this.props
    let page = 1
    return(
    <div className={classes.root}>
        {/* {JSON.stringify(this.props.ratings)} */}
        {this.props.ratings.map((rating,index) => {
            if(index< page*10){
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
            }
        })}
        <Button className={classes.next} onClick={page++}>
            Next Page
        </Button>
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