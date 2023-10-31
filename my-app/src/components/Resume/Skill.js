import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import dayjs from 'dayjs';

const skillAndCerti = ({ data }) => (
    // name: 'Programming Languages',
    // list 
    <article className="jobs-container">
        <h4 className='name'>{data.name}</h4>
        {/* <p className='list'>{data.list}</p> */}
        {data.list.map((tech) => (
          <button key={tech} style={{ margin: '5px' }}>
            {tech}
          </button>
        ))}
    </article>
);

const Skill = ({ data }) => (
    <div className="skill">
        <div className="link-to" id="skill" />
            <div className="title">
                <h3>Skill</h3>
            </div>
            {data.map((skill) => (
            <skillAndCerti
                data={skill}
                key={skill}
            />
            ))}
            
    </div>
);

skillAndCerti.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        list: PropTypes.arrayOf(PropTypes.string),
    })),
};

Skill.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
};

export default Skill;
