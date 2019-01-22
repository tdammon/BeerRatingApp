import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';


const styles = theme => ({
    root: {
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
    link: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none',
    },
    button: {  
        padding: theme.spacing.unit * 2.5,
        textAlign: 'center',
        display: 'flex',
        width: '75%',
        fontSize: 20,
    }
    
})
class HomePage extends Component {

render() {
    const { classes } = this.props;
    return(
        
    <div className={classes.root}>
        
        <Grid className={classes.grid} container spacing={32}>

            <Grid className={classes.container} item xs={12}>
            <Link className={classes.link} to="/score"><Button variant='raised' className={classes.button}>Rate a Beer</Button></Link>
            </Grid>

            <Grid className={classes.container} item xs={12}>
            <Link className={classes.link} to="/score"><Button variant='raised' className={classes.button}>Rate a Bar</Button></Link>
            </Grid>

            <Grid className={classes.container} item xs={12}>
            <Link className={classes.link} to="/score"><Button variant='raised' className={classes.button}>Bars Near Me</Button></Link>
            </Grid>

        </Grid>
    </div>
    )
}
};

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(withStyles(styles)(HomePage));