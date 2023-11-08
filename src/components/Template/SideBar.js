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
    <section id='sidebar'>
        <section id='intro'>
            <Link to="/" className='logo'>
                <img src='/images/me2.jpg' alt="" />
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
            <p> Hi there! I'm Songting Yang, CS Student at Northeastern University, alumni of Rutgers University and SCUT. Aspiring to shape the future as a software engineer!</p>
        </section>
    </section>
)

export default SideBar;