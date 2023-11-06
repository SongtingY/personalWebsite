import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import dayjs from 'dayjs';

const Job = ({ data }) => (
    //   name: 
    //   position: 
    //   companyProfile:
    //   startDate: 
    //   endDate: 
    //   summary: 
    //   techStack
    <article className="jobs-container">
      <header>
        <div className='container'>
            <h4 className='company'>{data.name}</h4>
            <p className='location'>{data.location}</p>
        </div>
        <div className='container'>
            <p className="position">{data.position}</p>
            <p className='year'>{dayjs(data.startDate).format('MMMM YYYY')} - {data.endDate ? dayjs(data.endDate).format('MMMM YYYY') : 'PRESENT'}</p>
        </div>
        </header>
       <p className='companyProfile'>{data.companyProfile}</p>
        <ul className="points">
           {data.summary.map((point) => (
            <li key={point}>{point}</li>
            ))
            }
      </ul>
    </article>
);

const Experience = ({ data }) => (
    <div className="experience">
        <div className="link-to" id="experience" />
            <div className="title">
                <h3>Experiences</h3>
            </div>
            {data.map((job) => (
            <Job
                data={job}
                key={`${job.name}-${job.position}`}
            />
            ))}
            
    </div>
);

Experience.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.string,
        companyProfile: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        summary: PropTypes.arrayOf(PropTypes.string),
    })),
};

Job.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        companyProfile: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        summary: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
};

export default Experience;
