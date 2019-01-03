import React, { Component } from 'react';
import { connect } from 'react-redux';



class HomePage extends Component {

render() {
    return(
        
    <div>
        
        <p>
            This about page is for anyone to read!
        </p>
    </div>
    )
}
};

export default connect()(HomePage);