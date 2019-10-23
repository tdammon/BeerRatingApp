import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Star from '@material-ui/icons/Star';

const styles = theme => ({
    card: {
        width: '90vw',
        margin: '1rem',
    },
    details: {
        display: 'flex',
      },
    beerName: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    cardContent: {
        flex: '1 0 auto',
    },
    inlinetypography: {
        float: 'left',
        paddingLeft: 10,
    },
    dropdown: {
        display: 'flex',
        justifySelf: 'center',
        alignSelf: 'end',
        marginLeft: '50%',
        padding: 0,
    },
    img : {
        float: 'right',
        width: 100,
        height: 100,
    },
    orangeStar : {
        color : 'orange',
    },
    textStar : {
        display: 'flex'
    },
    cardCat: {
        width: '3rem',
    }
})

class NewCardPage extends Component {

    state = {
        open: false,
    }

    handleExpandClick = () => {
        this.setState({
            open: !this.state.open,
        })
    }

    renderStars = (prop) => {
      switch(prop) {
        case 1 :
          return(
            <Star className={this.props.classes.orangeStar}></Star>
          );
        case 2 :
          return(
            <div>
            <Star className={this.props.classes.orangeStar}></Star>
            <Star className={this.props.classes.orangeStar}></Star>
            </div>
          );
        case 3 :
          return(
            <div>
            <Star className={this.props.classes.orangeStar}></Star>
            <Star className={this.props.classes.orangeStar}></Star>
            <Star className={this.props.classes.orangeStar}></Star>
            </div>
          );
        case 4 :
          return(
            <div>
            <Star className={this.props.classes.orangeStar}></Star>
            <Star className={this.props.classes.orangeStar}></Star>
            <Star className={this.props.classes.orangeStar}></Star>
            <Star className={this.props.classes.orangeStar}></Star>
            </div>
          );
        case 5 :
          return(
              <div>
                <Star className={this.props.classes.orangeStar}></Star>
                <Star className={this.props.classes.orangeStar}></Star>
                <Star className={this.props.classes.orangeStar}></Star>
                <Star className={this.props.classes.orangeStar}></Star>
                <Star className={this.props.classes.orangeStar}></Star>
              </div>
          )        
          default :
          return;
      } 
    }


render() {
    const {classes} = this.props
    return(
    <div>
      <Card className={classes.card}>    
        <div className={classes.beerName}>
          <Typography variant="headline">{this.props.name}</Typography>
        </div>
        <div className={classes.details}>
          <CardContent className={classes.cardContent}>
            <div className={classes.inlinetypography}>
                <div className={classes.textStar}>
                    <Typography className={classes.cardCat}>Aroma: </Typography>
                    <div>{this.renderStars(this.props.aroma)}</div>
                </div>
                <div className={classes.textStar}>
                    <Typography className={classes.cardCat}>Color: </Typography>
                    <div>{this.renderStars(this.props.color)}</div>
                </div>
                <div className={classes.textStar}>
                    <Typography className={classes.cardCat}>Flavor: </Typography>
                    <div>{this.renderStars(this.props.flavor)}</div>
                </div>
                <div className={classes.textStar}>
                    <Typography className={classes.cardCat}>Finish: </Typography>
                    <div>{this.renderStars(this.props.finish)}</div>
                </div>
            </div>   
          </CardContent>
          <CardMedia 
            className={classes.img}
            image={this.props.url}
            />
        </div>
        {this.props.notes ?
            <CardContent>
              {this.props.notes}
            </CardContent> : null}
        
      </Card>       
    </div>
    )
}
};
const mapStateToProps = state => ({
    user: state.userReducer,
  });

export default connect(mapStateToProps)(withStyles(styles)(NewCardPage));