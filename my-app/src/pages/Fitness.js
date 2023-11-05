import React from 'react'
import BasicSta from '../components/Fitness/BasicSta';
import SBDSta from '../components/Fitness/SBDSta';
import SplitsSta from '../components/Fitness/SplitsSta';
import basic from '../data/Fitness/basic';
import sdb from '../data/Fitness/sbd';
import splits from '../data/Fitness/splits';
import Main from '../layout/Main';

const sections = {
  Basic: () => <BasicSta data={basic} />,
  SBD: () => <SBDSta initialData={sdb}/>,
  Split: () => <SplitsSta data={splits} />
};

const Fitness = () => (
  <Main  title="Fitness" description="My Fitness Page">
    <article className='post' id='fitness'>
        <header>
          <div className="title">
              <h2>Fitness</h2>
              <p> Gym is where i spend my most time on! IYKYK</p>
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

export default Fitness;