import React from 'react'
import Main from '../layout/Main';
import Degree from '../components/Resume/Degree';
import degrees from '../data/Resume/degrees';
import Experience from '../components/Resume/Experience';
import experiences from '../data/Resume/experiences';


const sections = {
  Degree: () => <Degree data={degrees} />,
  Experience: () => <Experience data={experiences}/>
};

const Resume = () => (
  <Main title="Resume" description="My resume">
      <article className='post' id='resume'>
        <header>
          <div className="title">
            <h2></h2>
            <div className="link-container">
              {Object.keys(sections).map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>))}
            </div>
          </div>
        </header>
        {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
        ))}
      </article>
  </Main>
);

export default Resume;