import React from 'react'
import Main from '../layout/Main';

const Contact = () =>{
    
    return (
      <Main title="Contact" description="Contact me!!!!">
      <article className='post' id="contact">
        <header>
          <div className="title">
            <h2>Contact</h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch. You can email me at:<a href='mailto:songtingyang.ba@gmail.com'>  songtingyang.ba@gmail.com</a></p>
        </div>
      </article>
  </Main>
    )

};

export default Contact;