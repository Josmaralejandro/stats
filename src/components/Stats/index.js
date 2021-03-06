import React, { Component } from 'react';
import ImageStat from './ImageStat';
import Media from '../Media';
import Menu from './Menu';
import ValStat from '../ValStat';
import Recommendations from '../Recommendations';


class Stats extends Component {

    
    render(){
        return(
            <div>
                <h6>Neo Marketing  >  Marketing</h6>
                <h4>
                    ¿Cómo mejoró tu cuenta Instagram gracias a nuestra ayuda?
                </h4>
                <div id="horizontal">
                    <h5 id="help">(Ayuda con Instagram)</h5>
                    <Media/>
                </div>
                <div id="pair">
                    <ImageStat/>
                    <Menu/>
                </div>
                <ValStat/>
                <div>
                    <h6> MÁS ESTADÍSTICAS SOBRE EL TEMA </h6>
                    <a href=""><h5>--> Marketing</h5></a>
                </div>
                <Recommendations/>
            </div>
        )
    }
}

export default Stats;