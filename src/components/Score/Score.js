import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core';
import Star from '@material-ui/icons/Star';

const styles = theme => ({
    container : {
        height: '100%',
        display: 'flex',
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
        name: this.props.name,
    }

    setValue=(val) => {
        if(!this.state.clicked){
        this.setState({
            ...this.state,
            value: val,
        });   
        this.dispatchScore(val);
    }
    }

    clickvalue=(val) => {
        this.setState({
            ...this.state,
            clicked : true,
            value: val,
        })
        this.dispatchScore(val);
    }

    dispatchScore= (val)=> {
        this.props.dispatch({type: 'UPDATE_SCORE', payload : {[this.props.name] : val}})
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

render() {
    const {classes} = this.props
    return(
        
    <div className={classes.container}>

      {this.showStars()}  

    </div>
    )
}
};
const mapStateToProps = state => ({
    scores: state.ScoreReducer,
  });

export default connect(mapStateToProps)(withStyles(styles)(Score));