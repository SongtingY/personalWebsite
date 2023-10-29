import React from 'react';
import Main from '../layout/Main';


const Index = () => (
  <Main title="Songss" description="Index page">
      <article className='post' id='index'>
        <header>
          <div className='title'>
            <h2>About this Site</h2>
            <p> This is a react application</p>
          </div>
        </header>
        <p>
          Welcome to my website. Please feel free to read more
        </p>
      </article>
  </Main>
);

export default Index;