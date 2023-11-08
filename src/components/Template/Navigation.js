import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../data/routes'
import Hamburger from './Hamburger';

const style  = {
    margin: "auto",
    width: "40px",
    height: "40px",
    borderRadius: "30px",
};

const Navigation = () => (
    <header id='header'>
        <div className='logoAndName'>
            <img src='/images/A.png' alt=""  />
            <h1 className='index-link'>
                
                {routes.filter((l) => l.index).map((l)=>(
                    <Link key={l.label} to={l.path}>{l.label}</Link>
                ))}
            </h1>
        </div>
        <nav className='links'>
            <ul>
                {routes.filter((l) => !l.index).map((l)=>(
                    <li key={l.label}>
                        <Link to={l.path}>{l.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        < Hamburger/>
    </header>
);

export default Navigation;