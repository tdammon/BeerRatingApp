import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
    container : {
      display : 'flex',
      justifyContent: 'center',
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#dbd5d5',
        width: 500,
        padding: 35,
        marginTop: 40,
        borderRadius: 10,
      },
      star: {
          '&:hover': {
            color: 'orange'
          }
      },
      orangeStar: {
          color: 'orange'
      }
})

class Score extends Component {

    state = {
        value : 0,
    }

    setValue=(val) => {
        this.setState({
            ...this.state,
            value: val,
        });
        console.log(this.state.value)
    }

    showStars = () => {
        switch (this.state.value) {
            case 0 :
                return (<div>
                <Star onMouseEnter={()=>this.setValue(1)}></Star>
                <Star onMouseEnter={()=>this.setValue(2)}></Star>
                <Star onMouseEnter={()=>this.setValue(3)}></Star>
                <Star onMouseEnter={()=>this.setValue(4)}></Star>
                <Star onMouseEnter={()=>this.setValue(5)}></Star>
                </div>);
            case 1 :
                return (<div>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(1)}></Star>
                <Star onMouseEnter={()=>this.setValue(2)}></Star>
                <Star onMouseEnter={()=>this.setValue(3)}></Star>
                <Star onMouseEnter={()=>this.setValue(4)}></Star>
                <Star onMouseEnter={()=>this.setValue(5)}></Star>
                </div>);
            case 2 :
                return (<div>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(1)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(2)}></Star>
                <Star onMouseEnter={()=>this.setValue(3)}></Star>
                <Star onMouseEnter={()=>this.setValue(4)}></Star>
                <Star onMouseEnter={()=>this.setValue(5)}></Star>
                </div>);
            case 3 : 
                return (<div>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(1)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(2)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(3)}></Star>
                <Star onMouseEnter={()=>this.setValue(4)}></Star>
                <Star onMouseEnter={()=>this.setValue(5)}></Star>
                </div>);
            case 4 :
                return (<div>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(1)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(2)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(3)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(4)}></Star>
                <Star onMouseEnter={()=>this.setValue(5)}></Star>
                </div>);
            case 5 :
                return (<div>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(1)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(2)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(3)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(4)}></Star>
                <Star className={this.props.classes.orangeStar} onMouseEnter={()=>this.setValue(5)}></Star>
                </div>);
            default :
                return ;                    
        }
    };

render() {
    const {classes} = this.props
    return(
        
    <div className={classes.container}>
        <div className={classes.box}>
            {this.showStars()}
        </div>
    </div>
    )
}
};
const mapStateToProps = state => ({
  });

export default connect(mapStateToProps)(withStyles(styles)(Score));