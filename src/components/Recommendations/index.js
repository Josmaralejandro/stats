import React, { Component } from 'react';
import Recommendation from './Recomendation';

class Recommendations extends Component {
    render() {
        return(
            <div id="cards">
                <Recommendation/>
                <Recommendation/>
                <Recommendation/>
            </div>
        )
    }
}

export default Recommendations;