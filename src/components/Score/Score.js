import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles, Dialog, Typography} from '@material-ui/core';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    container : {
        height: '100%',
        display: 'flex',
    },
    grid: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#dbd5d5',
        borderRadius: 10,
        width: '75%',
        padding: 20,
      },
    text:{
        fontSize: 20,
        display: 'inline'
    },
    starbox: {
        display: 'inline',
    },
      star: {
          '&:hover': {
            color: 'orange'
          }
      },
      orangeStar: {
          color: 'orange'
      },
})

class Score extends Component {

    state = {
        value : 0,
        clicked: false,
        open: true,
    }

    setValue=(val) => {
        if(!this.state.clicked){
        this.setState({
            ...this.state,
            value: val,
        });
        console.log(this.state.value)
    }
    }

    clickvalue=(val) => {
        this.setState({
            ...this.state,
            clicked : true,
            value: val,
        })
    }

    showStars = () => {
        switch (this.state.value) {
            case 0 :
                return (<div className={this.props.classes.starbox}>
                <Star onMouseEnter={()=>this.setValue(1)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(1)}></Star>
                <Star onMouseEnter={()=>this.setValue(2)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(2)}></Star>
                <Star onMouseEnter={()=>this.setValue(3)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(3)}></Star>
                <Star onMouseEnter={()=>this.setValue(4)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(4)}></Star>
                <Star onMouseEnter={()=>this.setValue(5)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(5)}></Star>
                </div>);
            case 1 :
                return (<div>
                <Star className={this.props.classes.orangeStar} onMouseLeave={()=>this.setValue(0)} onMouseEnter={()=>this.setValue(1)} onClick={()=>this.clickvalue(1)}></Star>
                <Star onMouseEnter={()=>this.setValue(2)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(2)}></Star>
                <Star onMouseEnter={()=>this.setValue(3)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(3)}></Star>
                <Star onMouseEnter={()=>this.setValue(4)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(4)}></Star>
                <Star onMouseEnter={()=>this.setValue(5)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(5)}></Star>
                </div>);
            case 2 :
                return (<div>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(1)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(1)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(2)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(2)}></Star>
                <Star onMouseEnter={()=>this.setValue(3)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(3)}></Star>
                <Star onMouseEnter={()=>this.setValue(4)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(4)}></Star>
                <Star onMouseEnter={()=>this.setValue(5)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(5)}></Star>
                </div>);
            case 3 : 
                return (<div>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(1)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(1)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(2)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(2)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(3)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(3)}></Star>
                <Star onMouseEnter={()=>this.setValue(4)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(4)}></Star>
                <Star onMouseEnter={()=>this.setValue(5)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(5)}></Star>
                </div>);
            case 4 :
                return (<div>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(1)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(1)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(2)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(2)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(3)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(3)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(4)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(4)}></Star>
                <Star onMouseEnter={()=>this.setValue(5)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(5)}></Star>
                </div>);
            case 5 :
                return (<div>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(1)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(1)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(2)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(2)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(3)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(3)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(4)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(4)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(5)} onMouseLeave={()=>this.setValue(0)} onClick={()=>this.clickvalue(5)}></Star>
                </div>);
            default :
                return ;                    
        }
    };

    handleClose = () => {
        this.setState({
          ...this.state,
          open: false,
        })
      }

    beerSearch =() => event => {
        this.setState({
            ...this.state,
            beerName: event.target.value
        })
    }  

render() {
    const {classes} = this.props
    return(
        
    <div className={classes.container}>

        <Grid className={classes.grid} container spacing={32}>
            <div className={classes.box}>
            <Typography className={classes.text}>Aroma</Typography>
                {this.showStars()}
            </div>
        </Grid>

        <div>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={this.state.open}
                onClose={this.handleClose}
                >

                <DialogTitle>Find Your Beer</DialogTitle>

                <DialogContent>
                    <TextField 
                        variant="outlined"
                        placeholder="Search Here"
                        // label="Label"
                        onChange={this.beerSearch()}
                    />
                </DialogContent>
                    
                <DialogActions>
                <Button onClick={()=>this.handleClose()}>
                  Cancel
                </Button>
                <Button onClick={()=>this.handleClose()}>
                  Confirm
                </Button>
              </DialogActions>

            </Dialog>
        </div>
        
    </div>
    )
}
};
const mapStateToProps = state => ({
  });

export default connect(mapStateToProps)(withStyles(styles)(Score));