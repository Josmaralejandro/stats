import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ValCard from '../ValCard';

const ValStat = () => (
    <Carousel indicators={false} interval={0}>
                <Carousel.Item>
                    <div id="carousel">
                        <ValCard/>
                        <ValCard/>
                        <ValCard/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div id="carousel">
                        <ValCard/>
                        <ValCard/>
                        <ValCard/>
                    </div>
                </Carousel.Item>
            </Carousel>
)

export default ValStat;