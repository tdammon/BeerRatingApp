import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {  
        padding: theme.spacing.unit * 1.5,
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
                <Button variant='raised' className={classes.button}>Rate a Beer</Button>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Button variant='raised' className={classes.button}>Rate a Bar</Button>
            </Grid>
            <Grid className={classes.container} item xs={12}>
                <Button variant='raised' className={classes.button}>Bars Near Me</Button>
            </Grid>
        </Grid>
    </div>
    )
}
};

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(withStyles(styles)(HomePage));