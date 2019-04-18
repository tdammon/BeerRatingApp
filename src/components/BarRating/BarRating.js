import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles, Dialog, Typography} from '@material-ui/core';
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
        alignItems: 'flex-start',
    },
    addImage: {
        display: 'flex',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 90,
        height: 100,
        width: 100,
        justifySelf: 'flex-end',
        marginRight: '12.5%',
    },
    grid: {
        display: 'flex',
        marginTop: '10%',
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
    notes: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
    },
})

class BarRating extends Component {

    state = {
        open: true,
        openSearch: true,
        openSearch1: true,
        notes: null,
        barName: null,
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
            barName: event.target.value
        })
        if(event.target.value !==""){
            this.props.dispatch({type: 'BAR_LOOKUP', payload: event.target.value})
        }
    }  

render() {
    const {classes} = this.props
    return(
        
    <div className={classes.root}>

        <Grid className={classes.grid} container spacing={24}>
            {/* <Grid className={classes.container} style={{justifyContent: 'flex-end'}} item xs={12}>
                <Button className={classes.addImage}>
                    Add 
                    <br></br>
                    Image
                </Button>
            </Grid> */}
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Ambiance</Typography>
                    <Score />
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Noise</Typography>
                    <Score />
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Crowd</Typography>
                    <Score />
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Menu</Typography>
                    <Score />
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Entertainment</Typography>
                    <Score />
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>
                    <TextField
                        className={classes.notes}
                        placeholder='Notes'
                        multiline
                        rows="4"
                        label='Notes'
                        variant="outlined"
                    />
                </Paper>
            </Grid>
            <Grid className={classes.container} style={{justifyContent: 'flex-end'}} item xs={12}>
                <Button className={classes.addImage}>
                    Submit
                </Button>
            </Grid>
            
        </Grid>

        <div>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={this.state.open}
                onClose={this.handleClose}
                >

                <DialogTitle>Select Your Bar</DialogTitle>

                <DialogContent>
                    <TextField 
                        variant="outlined"
                        placeholder="Search Here"
                        // label="Label"
                        onChange={this.barSearch()}
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
    bar: state.barReducer,
  });

export default connect(mapStateToProps)(withStyles(styles)(BarRating));