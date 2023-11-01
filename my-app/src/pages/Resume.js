import React from 'react'
import Main from '../layout/Main';
import Degree from '../components/Resume/Degree';
import degrees from '../data/Resume/degrees';
import Experience from '../components/Resume/Experience';
import experiences from '../data/Resume/experiences';
import Project from '../components/Resume/Project';
import projects from '../data/Resume/projects';
import Skill from '../components/Resume/Skill';
import skills from '../data/Resume/skills';

import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';


const sections = {
  Degree: () => <Degree data={degrees} />,
  Experience: () => <Experience data={experiences}/>,
  Project: () => <Project data={projects}/>,
  Skill: () => <Skill data={skills}/>
};

const Resume = () => (
  <Main title="Resume" description="My resume">
      <article className='post' id='resume'>
        <header>
          <div className="title">
            <div className='title_download'>
            <h2>Resume</h2>
            <Button type="dashed" icon={<DownloadOutlined />} className="download download-button" href="/resume.pdf" download download-button>
            {/* <DownloadButton filename="/resume.pdf">Download My Resume</DownloadButton> */}
               Download My Most Recent Resume
            </Button>
            </div>
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