import React from 'react'
import BasicSta from '../components/Fitness/BasicSta';
import basic from '../data/Fitness/basic';
import Main from '../layout/Main';

const sections = {
  Basic: () => <BasicSta data={basic} />,
};

const Fitness = () => (
  <Main  title="Fitness" description="My Fitness Page">
    <article className='post' id='fitness'>
        <header>
          <div className="title">
              <h2>Fitness</h2>
              <p> Gym is where i spend my most time on! IYKYK</p>
            </div>
      </header>
        {Object.entries(sections).map(([name, Section]) => (
          <Section key={name} />
        ))}
    </article>
  </Main>
);

export default Fitness;