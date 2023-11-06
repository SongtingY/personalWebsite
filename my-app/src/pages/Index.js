import React from 'react';
import Main from '../layout/Main';


const Index = () => (
  <Main title="Songss" description="Index page">
      <article className='post' id='index'>
        <header>
          <div className='title'>
            <h2>About this Site</h2>
            <p> Welcome to the React corner of my digital playground. Take a look around and see what I've been up to!</p>
          </div>
        </header>
        <p style={{fontFamily: "Optima, sans-serif"}}>
        Welcome aboard! I'm thrilled to have you here. Dive into my world where you'll 
        find bits about my journey, the experiences I cherish, and a peek into my favorite 
        fitness escapades. Enjoy your stay and explore at your heart's content!
        </p>
      </article>
  </Main>
);

export default Index;