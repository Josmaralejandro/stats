import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ValStat extends Component {
    render() {
        return(
            <Carousel indicators={false} interval={0}>
                <Carousel.Item>
                    <div id="carousel">
                        <img
                        className="d-block w-100"
                        src={require('../../assets/facebook.jpg')}
                        alt="First slide"
                        />
                        <img
                        className="d-block w-100"
                        src={require('../../assets/twitter.jpg')}
                        alt="Third slide"
                        />
                        <img
                        className="d-block w-100"
                        src={require('../../assets/linkedin.jpg')}
                        alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../assets/twitter.jpg')}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require('../../assets/linkedin.jpg')}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default ValStat;