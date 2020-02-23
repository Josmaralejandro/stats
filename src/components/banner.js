import React from 'react';
import { Link } from 'react-router-dom';

const Banner = (props) => (
    <nav id='banner'>
        <Link to='/' id='item'>
            Yes Them |
        </Link>
        <Link to='/create' >
            Crear estadísticas
        </Link>
        <Link to='/login'>
            Login
        </Link>
    </nav>
);

export default Banner;