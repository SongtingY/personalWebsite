import React from 'react';
import data from '../../data/contacts';
import { Link } from 'react-router-dom';

const Footer = () => (
    <section id='footer'>
        <ul className="icons">
            {data.map((s) => (
            <li key={s.label}>
                <a href={s.link}>
                {s.icon}
                </a>
            </li>
            ))}
        </ul>
        <p className="copyright">&copy; Songting&apos;Yang <Link to="/">mldangelo.com</Link>.</p>
    </section>
);


export default Footer;
