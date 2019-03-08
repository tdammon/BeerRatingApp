import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        backgroundColor: 'blue',
        // marginTop: '10%',
        // height: '10%',
    },
    nav: {
        float: 'left',
        color: '#f2f2f2',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: 20,
        padding: 8,
    }
})

class Nav extends Component {

    render() {
        const { classes } = this.props;
        return(      
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.bar}>
                <Toolbar>
                <Link className={classes.nav} to="/home">Home</Link>
                <Link className={classes.nav} to="/rating">Beer</Link>
                <Link className={classes.nav} to="/account">Score</Link>
                
                </Toolbar>
            </AppBar>
            
        </div>
        )
    }
    };


const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(withStyles(styles)(Nav));