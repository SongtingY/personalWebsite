import React from 'react'
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

// const style  = {
//         margin: "auto",
//         width: "200px",
//         height: "196px",
//         borderRadius: "150px",
//     };

const SideBar = () => (
    <section className='sidebar'>
        <section id='intro'>
            <Link to="/" className='logo'>
                <img src='/images/me2.png' alt="" />
            </Link>
            <header>
                <h2>
                    Songting Yang
                </h2>
                <p><a href='mailto:songtingyang.ba@gmail.com'>songtingyang.ba@gmail.com</a></p>
            </header>
        </section>
        <section className='blurb'>
            <h2>About</h2>
            <p> Hi my name is Songting. </p>
        </section>
    </section>
)

export default SideBar;