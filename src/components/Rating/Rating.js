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
import Paper from '@material-ui/core/Paper';

import Score from '../Score/Score'

const styles = theme => ({
    root : {
        flexGrow: 1,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    grid: {
        display: 'flex',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#dbd5d5',
        borderRadius: 10,
        width: '75%',
        padding: theme.spacing.unit * 2.5,
      },
    text:{
        fontSize: 20,
        display: 'inline'
    },
})

class Rating extends Component {

    state = {
        open: true,
    }


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
        
    <div className={classes.root}>

        <Grid className={classes.grid} container spacing={24}>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Aroma</Typography>
                    <Score />
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Color</Typography>
                    <Score />
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Flavor</Typography>
                    <Score />
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Finish</Typography>
                    <Score />
                </Paper>
            </Grid>
            
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

export default connect(mapStateToProps)(withStyles(styles)(Rating));