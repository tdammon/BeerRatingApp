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

const styles = theme => ({
    card: {
        // display: 'flex',
        // flexDirection: 'row',
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
        // display: 'inline',
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
        
    }
})

class RecentlyRatedPage extends Component {

    state = {
        open: false,
    }

    handleExpandClick = () => {
        this.setState({
            open: !this.state.open,
        })
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
                            <Typography>Aroma:  </Typography>
                            <Typography>Color:</Typography>
                            <Typography>Flavor:</Typography>
                            <Typography>Finish:</Typography>
                            </div>
                            <div className={classes.inlinetypography}>
                            <Typography>{this.props.aroma}</Typography>
                            <Typography>{this.props.color}</Typography>
                            <Typography>{this.props.flavor}</Typography>
                            <Typography>{this.props.finish}</Typography>
                            </div>
                            
                            
                        </CardContent>
                        <CardMedia 
                        className={classes.img}
                        image={this.props.url}
                        />
                        </div>
                        <IconButton 
                            className={classes.dropdown}
                            onClick={this.handleExpandClick}
                            >
                            <ExpandMoreIcon />
                        </IconButton>
                        <Collapse in={this.state.open} unmountOnExit>
                            <CardContent>
                                {this.props.notes}
                            </CardContent>
                        </Collapse>
                </Card>
            
    </div>
    )
}
};
const mapStateToProps = state => ({
    user: state.userReducer,
  });

export default connect(mapStateToProps)(withStyles(styles)(RecentlyRatedPage));