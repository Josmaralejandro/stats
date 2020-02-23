import React, { Component } from 'react';
import ImageStat from '../ImageStat';
import Media from '../Media';
import Menu from '../Menu';


class Stats extends Component {

    
    render(){
        return(
            <div>
                <h3>Neo Marketing  >  Marketing</h3>
                <h3>
                    ¿Cómo mejoró tu cuenta Instagram gracias a nuestra ayuda?
                </h3>
                <div id="horizontal">
                    <h3>
                        (Ayuda con Instagram)
                    </h3>
                    <Media/>
                </div>
                <div id="central">
                    <ImageStat/>
                    <Menu/>
                </div>
            </div>
        )
    }
}

export default Stats;