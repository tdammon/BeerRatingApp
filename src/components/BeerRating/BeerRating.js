import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {withStyles, Dialog, Typography, ListItem, List, ListItemIcon, ListItemText, Input, Collapse} from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import AddCircle from '@material-ui/icons/AddCircle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import swal from 'sweetalert';


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
    nav: {
        color: 'black',
        textDecoration: 'none',
        fontSize: 20,
    },
    swal: {
        backgroundColor: 'green',
    }
})

class BeerRating extends Component {

    state = {
        open: true,
        openSearch: true,
        notes: null,
        beerName: null,
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
        this.props.dispatch({type: 'BEER_LOOKUP', payload: event.target.value})
    }  

    updateNotes = (event) => {
        this.setState({
            ...this.state,
            notes: event.target.value,
        })
    }

    //Need to add id after user authentication page is created
    submitScore = () => {
        console.log(this.props.scores)
        this.props.dispatch({type: 'SUBMIT_SCORE', payload: {ratings: this.props.scores, user_id : this.props.user.id, name: this.state.beerName, notes: this.state.notes}})
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            // timer: 1000,
          });
    }

    selectName =(name) => {
        this.setState({
            ...this.state,
            beerName: name,
            openSearch: false,
        })
    }

render() {
    const {classes} = this.props
    return(
        
    <div className={classes.root}>

        <Grid className={classes.grid} container spacing={24}>
            <Grid className={classes.container} style={{justifyContent: 'flex-end'}} item xs={12}>
                <Button className={classes.addImage}>
                    Add 
                    <br></br>
                    Image
                </Button>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Aroma</Typography>
                    <Score name={'Aroma'}/>
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Color</Typography>
                    <Score name={'Color'}/>
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Flavor</Typography>
                    <Score name={'Flavor'}/>
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>

                    <Typography className={classes.text}>Finish</Typography>
                    <Score name={'Finish'}/>
                </Paper>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Paper className={classes.box}>
                    <TextField
                        className={classes.notes}
                        placeholder='Notes'
                        onChange={this.updateNotes}
                        multiline
                        rows="4"
                        label='Notes'
                        variant="outlined"
                    />
                </Paper>
            </Grid>
            <Grid className={classes.container} style={{justifyContent: 'flex-end'}} item xs={12}>
                <Button className={classes.addImage} onClick={this.submitScore}>
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

                <DialogTitle>Find Your Beer</DialogTitle>

                <DialogContent>
                    {/* <TextField 
                        variant="outlined"
                        placeholder="Search Here"
                        // label="Label"
                        onChange={this.beerSearch()}
                    /> */}
                    
                    <List>
                        <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Search />
                        </ListItemIcon>
                        <Input onChange={this.beerSearch()} type="search" 
                            placeholder="Search Your Beer" value={this.state.beerName}/>
                        </ListItem>
                        <Collapse in={this.state.openSearch} unmountOnExit>
                        {this.props.beer.map( beer => (
                            <ListItem button key={beer.name} onClick={() => this.selectName(beer.name)}>
                                <ListItemIcon><AddCircle/></ListItemIcon>
                                <ListItemText inset primary={beer.name}/>
                            </ListItem>
                        ))}
                        </Collapse>
                    </List>
                    
                </DialogContent>
                    
                <DialogActions>
                <Button>
                    <Link className={classes.nav} to="/home">Cancel</Link>
                </Button>
                <Button onClick={()=>this.handleClose()}>
                  <p className={classes.nav}>Confirm</p>
                </Button>
              </DialogActions>

            </Dialog>
        </div>
        {JSON.stringify(this.state.scores)}
    </div>
    )
}
};
const mapStateToProps = state => ({
    scores: state.ScoreReducer,
    user: state.userReducer,
    beer: state.setBeerListReducer,
  });

export default connect(mapStateToProps)(withStyles(styles)(BeerRating));