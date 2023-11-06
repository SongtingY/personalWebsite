import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const SkillAndCerti = ({ data }) => (
    // name: 'Programming Languages',
    // list 
    <article className="skill-container">
        <h4 className='name'>{data.name}</h4>
        <div className='element'>
        {data.element.map((tech) => (
          <button key={tech} style={{ margin: '5px' }}>
            <Markdown>
                {tech}
            </Markdown>
          </button>
        ))}
        </div>
        
    </article>
);

const Skill = ({ data }) => (
    <div className="skill">
        <div className="link-to" id="skill" />
            <div className="title">
                <h3>Skills</h3>
            </div>
            {data.map((skill) => (
            <SkillAndCerti
                data={skill}
                key={skill.name}
            />
            ))}
            
    </div>
);

SkillAndCerti.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        element: PropTypes.arrayOf(PropTypes.string),
    })),
};

Skill.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        element: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
};

export default Skill;
