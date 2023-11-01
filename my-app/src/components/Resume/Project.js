import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Cell = ({ data }) => (
    <article className="project-container">
        <header>
            <div className='container'>
                <h4 className='name'>{data.name}</h4>
                <p className='icon'><a href={data.link}>{data.icon}</a></p>
                <p className='year'>{dayjs(data.startDate).format('MMMM YYYY')} - {data.endDate ? dayjs(data.endDate).format('MMMM YYYY') : 'PRESENT'}</p>
            </div>
        </header>
        <ul className="points">
            {data.summary.map((point) => (
            <li key={point}>
            <Markdown>
                {point}
            </Markdown>          
            </li>
            ))
            }
        </ul>
  </article>
  );

const Project = ({ data }) => (
    <div className="project">
        <div className="link-to" id="project" />
            <div className="title">
                <h3>Project</h3>
            </div>
        {data.map((project) => (
            <Cell
            data={project}
            key={project.title}
            />
        ))}
    </div>
);
  
Project.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        summary: PropTypes.arrayOf(PropTypes.string),
    })),
};

Cell.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        summary: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
};
  
export default Project;