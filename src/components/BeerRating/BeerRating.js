import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {withStyles, Dialog, Typography, ListItem, List, ListItemIcon, ListItemText, Input, Select, Collapse} from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
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
        // flexGrow: 1,
        // height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        backgroundImage: `url(https://s3.us-east-2.amazonaws.com/beerphotos/beer.jpg)`,
        backgroundSize : 'cover',
        backgroundAttachment: 'fixed',
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
        "&:hover": {
            "@media (hover: none)": {
                backgroundColor: 'black',
            }
        }
    },
    grid: {
        display: 'flex',
        marginTop: '10%',
        opacity: '0.8',
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
        margin: 0,
    },
    swal: {
        backgroundColor: 'green',
    },
    link: {
        width: '100%',
        height: '100%',
    },
    takePic: {
        display: 'none',
    },
    invisibleLink: {
        display: 'none',
    },
    // samplepic: {
    //     height: '75%',
    //     width: '90%',
    // },
    buttonDisplay: {
        diplay: 'flex',
        justifySelf: 'center',
        justifyContent: 'center',
    },
    dialogbox: {
         padding: 5,
         textAlign: 'center',
         width: '100%',
    },
    dialogheader: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '0px 0px 1px 0px',
    },
    dialogbox2: {
        padding: 3,
   },
   nested: {
       padding: 5,
       display: 'flex',
       justifyContent: 'center',
   },
})

class BeerRating extends Component {

    state = {
        open: true,
        openSearch: true,
        openSearch1: true,
        // openModal: false,
        notes: null,
        beerName: null,
        breweryName: null,
        imgSrc: null,
        imageType: null,
    }


    handleClose = () => {
        if(this.state.beerName == null || this.state.beerName.length < 1){
            swal({
                title: "Ooops!",
                text: "Did you forget to select your beer?",
                icon: "alert",
                timer: 3000,
              });
        }
        else {
            this.setState({
            ...this.state,
            open: false,
            })
        }
      }

    beerSearch =() => event => {
        this.setState({
            ...this.state,
            beerName: event.target.value
        })
        if(event.target.value !==""){
            this.props.dispatch({type: 'BEER_LOOKUP', payload: event.target.value})
        }
    }  

    brewerySearch =() => event => {
        this.setState({
            ...this.state,
            breweryName: event.target.value
        })
        if(event.target.value !== ""){
            this.props.dispatch({type: 'BREWERY_LOOKUP', payload: event.target.value})
        }
    }  

    updateNotes = (event) => {
        this.setState({
            ...this.state,
            notes: event.target.value,
        })
    }

    //Need to add id after user authentication page is created
    submitScore = () => {
        console.log(this.state)
        this.props.dispatch({type: 'SUBMIT_SCORE', payload: {ratings: this.props.scores, user_id : this.props.user.id, breweryName: this.state.breweryName, name: this.state.beerName, url: this.state.filename, notes: this.state.notes, filename: `${this.props.user.id}_${Date.now()}`}})
        // this.props.dispatch({type: 'ADD_PICTURE', payload: {picture: this.state.imgSrc, filename: `${this.props.user.id}_${Date.now()}`}})
        axios.get('/picture', {params: {filetype: this.state.imageType, filename: this.state.filename}})
        .then(response =>{
            var signedUrl = response.data;
            console.log(response)
            console.log(signedUrl)
            var headers= {
                  'Content-Type': this.state.imageType,
                };
              
              console.log(...this.state.imageType)
            return axios.put(signedUrl, this.state.newfile, {headers:headers});
            
        })
        .then(function (result) {
            console.log(result,'success');
            
            
          })
          .catch(function (err) {
            console.log(err, 'fail');
          });
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            timer: 2000,
          })
          .then(()=> {
            document.getElementById('invisibleLink').click()
          });
          
    }

    selectBeerName =(name) => {
        this.setState({
            ...this.state,
            beerName: name,
            openSearch: false,
        })
    }

    selectBreweryName =(name) => {
        this.setState({
            ...this.state,
            breweryName: name,
            openSearch1: false,
        })
    }

    addPic = () => {
        document.getElementById('takePic').click()
    }

    onChange = () => {
        let newfile = this.refs.file.files[0];
        let reader = new FileReader();
        let url = reader.readAsDataURL(newfile);
        reader.onloadend = () => {
            this.setState({
                ...this.state,
                openModal: true,
                imgSrc : [reader.result],
                imageType: newfile.type,
                newfile: newfile,
                filename: `${this.props.user.id}_${Date.now()}`
            })
            console.log(newfile)
            console.log(this.state)
            
        }
    }

    // closeModal = () => {
    //     this.setState({
    //         ...this.state,
    //         openModal: false,
    //         imgSrc : null,
    //     })
    // }

    // savePicture = () => {
    //     this.setState({
    //         ...this.state,
    //         openModal: false,
    //     })
    // }


render() {
    const {classes} = this.props
    return(
        
    <div className={classes.root}>

        <Grid className={classes.grid} container spacing={24}>
            <Grid className={classes.container} style={{justifyContent: 'flex-end'}} item xs={12}>
                <Button className={classes.addImage} onClick={this.addPic}>
                    
                    Add 
                    <br></br>
                    Image
                    
                </Button>
                <input 
                    className={classes.takePic} 
                    ref="file"
                    id="takePic" 
                    type="file" 
                    accept="image/*"
                    onChange={this.onChange}
                    />
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
                <Link id="invisibleLink" component={Link} to="/ratings"></Link>
            </Grid>
            
        </Grid>

        <div>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth={'xs'}
                fullWidth={true}
                open={this.state.open}
                onClose={this.handleClose}
                className={classes.dialogbox}
                >

                <DialogTitle className={classes.dialogheader}>Find Your Beer</DialogTitle>

                <DialogContent className={classes.dialogbox2}>        
                    <List>
                        <ListItem button className={classes.nested}>
                        {/* <ListItemIcon>
                            <Search />
                        </ListItemIcon> */}
                        <Input onChange={this.brewerySearch()} type="search" 
                            placeholder="Search Your Brewery" value={this.state.breweryName}/>
                        </ListItem>
                        <Collapse in={this.state.openSearch1} unmountOnExit>
                        {this.props.brewery.map( brewery => (
                            <ListItem divider={true} button key={brewery.name} onClick={() => this.selectBreweryName(brewery.name)}>
                                <ListItemIcon><AddCircle/></ListItemIcon>
                                <ListItemText inset primary={brewery.name}/>
                            </ListItem>
                        ))}
                        </Collapse>
                    </List>
                    
                </DialogContent>

                <DialogContent className={classes.dialogbox2}>        
                    <List>
                        <ListItem button className={classes.nested}>
                        {/* <ListItemIcon>
                            <Search />
                        </ListItemIcon> */}        
                        <Input onChange={this.beerSearch()} type="search" 
                            placeholder="Search Your Beer" value={this.state.beerName}/>
                        
                        </ListItem>
                        <Collapse in={this.state.openSearch} unmountOnExit>
                        {this.props.beer.map( beer => (
                            <ListItem divider={true} button key={beer.name} onClick={() => this.selectBeerName(beer.name)}>
                                <ListItemIcon><AddCircle/></ListItemIcon>
                                <ListItemText inset primary={beer.name}/>
                            </ListItem>
                            
                        ))}
                        </Collapse>
                        
                    </List>
                    
                </DialogContent>
                    
                <DialogActions>
                <Button component={Link} to="/home">
                  <p className={classes.nav}> Cancel</p> 
                </Button>
                <Button onClick={()=>this.handleClose()}>
                  <p className={classes.nav}>Confirm</p>
                </Button>
              </DialogActions>

            </Dialog>

            {/* <Dialog open={this.state.openModal}>
                <img src={this.state.imgSrc} className={classes.samplepic}/>
                <DialogActions className={classes.buttonDisplay}>
                    <Button onClick={()=>this.closeModal()}>
                        <HighlightOffIcon></HighlightOffIcon>
                    </Button>
                    <Button onClick={()=>this.savePicture()}>
                        <ThumbUpIcon></ThumbUpIcon>
                    </Button>
                </DialogActions>
            </Dialog>     */}

        </div>
        {JSON.stringify(this.state.scores)}
    </div>
    )
}
};
const mapStateToProps = state => ({
    credentials: state.credentialsReducer,
    scores: state.ScoreReducer,
    user: state.userReducer,
    beer: state.setBeerListReducer,
    brewery: state.setBreweryListReducer,
  });

export default connect(mapStateToProps)(withStyles(styles)(BeerRating));