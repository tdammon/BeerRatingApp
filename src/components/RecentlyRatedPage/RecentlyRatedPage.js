import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    card: {
        border: 'black',
    },
    beerName: {
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
    },
    inlinetypography: {
        // display: 'inline',
        float: 'left',
        paddingLeft: 10,
    },
    img : {
        float: 'right',
        width: 100,
        height: 100,
        
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
    return(
    <div>
        {/* {JSON.stringify(this.props.ratings)} */}
        {this.props.ratings.map(rating => {
            return(
                <Card className={classes.card}>
                    <div>
                        <CardContent>
                            <div className={classes.beerName}>
                            <Typography variant="headline">{rating.name}</Typography>
                            </div>
                            <div className={classes.inlinetypography}>
                            <Typography>Aroma:  </Typography>
                            <Typography>Color:</Typography>
                            <Typography>Flavor:</Typography>
                            <Typography>Finish:</Typography>
                            </div>
                            <div className={classes.inlinetypography}>
                            <Typography>{rating.aroma}</Typography>
                            <Typography>{rating.color}</Typography>
                            <Typography>{rating.flavor}</Typography>
                            <Typography>{rating.finish}</Typography>
                            </div>
                        </CardContent>
                    </div>
                    <div >
                    <CardMedia 
                    className={classes.img}
                    image="images/Frog.png"
                    />
                    </div>
                </Card>
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