import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const styles = theme => ({
  root: {
        flexGrow: 1,
        width: '100%'
    },
    bottomNav: {
        backgroundColor: 'grey',
        position :'fixed',
        width: '100%',
        bottom: 0,
        paddingBottom: 0,
    }
});

class Footer extends Component {
	render() {
		const { classes} = this.props;
		return (
			<footer className={classes.root}>
				<BottomNavigation
                    showLabels
                    className={classes.bottomNav}
                >
                    <BottomNavigationAction component={Link} to="/home" label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction component={Link} to="/account" label="Account" icon={<AccountCircleIcon />} />
                </BottomNavigation>
			</footer>
		)
	}
};

const mapStateToProps = state => ({
	
})

export default connect(mapStateToProps)(withStyles(styles)(Footer))