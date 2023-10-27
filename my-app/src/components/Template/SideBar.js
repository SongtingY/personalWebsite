import React from 'react'
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

function SideBar(){
    <section className='sideBar'>
        <section className='intro'>
            <Link to="/" className='pic'>
                <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
            </Link>
            <header>
                <h2>
                    Songting Yang
                </h2>
                <p><a href='mailto:songtingyang.ba@gmail.com'>songtingyang.ba@gmail.com</a></p>
            </header>
        </section>
        <section className='info'>
            <h2>About</h2>
            <p> Hi my name is Songting. </p>
        </section>
    </section>
}

export default SideBar;