import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ValCard from './ValCard';

const ValStat = () => (
    <Carousel indicators={false} interval={0}
     prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
     nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
    >
            <Carousel.Item>
                <div id="carousel">
                    <ValCard image={require('../../assets/facebook.jpg')} name="Usuario verificado"
                     degree="Manager" area="Software"
                    />
                    <ValCard image={require('../../assets/facebook.jpg')} name="Pedro Lopez"
                     degree="Abogado" area="Derecho"
                    />
                    <ValCard image={require('../../assets/facebook.jpg')} name="Maria Gomez"
                     degree="Ingeniero" area="Marketing"
                    />
                    <ValCard image={require('../../assets/facebook.jpg')} name="Usuario verificado"
                      degree="Consultor" area="Arquitectura"
                    />
                    <ValCard image={require('../../assets/facebook.jpg')} name="Carlos Perez"
                     degree="Administrativo" area="Consultoria"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div id="carousel">
                    <ValCard image={require('../../assets/facebook.jpg')} name="Usuario verificado"
                     degree="Manager" area="Software"
                    />
                    <ValCard image={require('../../assets/facebook.jpg')} name="Pedro Lopez"
                     degree="Abogado" area="Derecho"
                    />
                    <ValCard image={require('../../assets/facebook.jpg')} name="Maria Gomez"
                     degree="Ingeniero" area="Marketing"
                    />
                    <ValCard image={require('../../assets/facebook.jpg')} name="Usuario verificado"
                      degree="Consultor" area="Arquitectura"
                    />
                    <ValCard image={require('../../assets/facebook.jpg')} name="Carlos Perez"
                     degree="Administrativo" area="Consultoria"
                    />
                </div>
            </Carousel.Item>
    </Carousel>
)

export default ValStat;