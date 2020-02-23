import React from 'react';

const Media = () => (
    <div id="media">
        <a target="_blank" href='https://www.google.co.ve/'>
            <img src={require('../../assets/facebook.jpg')} id="social"/>
        </a>
        <a target="_blank" href='https://www.google.co.ve/'>
            <img src={require('../../assets/twitter.jpg')} id="social"/>
        </a>
        <a target="_blank" href='https://www.google.co.ve/'>
            <img src={require('../../assets/linkedin.jpg')} id="social"/>
        </a>
    </div>
)

export default Media;