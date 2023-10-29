import React, { useState, useEffect } from 'react'

import Main from '../layout/Main';
import Markdown from 'markdown-to-jsx'

const About = () =>{
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  }, []);

  return (<Main title="About" description="About me">
      <article className='post markdown' id="about">
        <header>
          <div className='title'>
            <h2>About me</h2>
            <p> This is about me</p>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
  </Main>)
};

export default About;
