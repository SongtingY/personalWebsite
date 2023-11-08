import React from 'react';
import PropTypes from 'prop-types';

const Education = ({ data }) => (
    <article className="degree-container">
      <header>
        <div className="container">
            <h4 className="school"><a href={data.link}>{data.school}</a></h4> 
            <p className='location'>{data.location}</p>
        </div>
        <div className="container">
            <p className="degree">{data.degree}</p>
            <p className='year'>{data.yearStart} - {data.yearEnd}</p>
        </div>
      </header>
    </article>
);

const Degree = ({ data }) => (
    <div className="education">
        <div className="link-to" id="education" />
        <div className="title">
        <h3>Education</h3>
        </div>
        {data.map((degree) => (
        <Education
            data={degree}
            key={degree.school}
        />
        ))}
    </div>
);

Degree.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      link: PropTypes.string,
      yearStart: PropTypes.number,
      yearEnd: PropTypes.number,
      location: PropTypes.string,
    })),
};

Education.propTypes = {
    data: PropTypes.shape({
      degree: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      school: PropTypes.string.isRequired,
      yearStart: PropTypes.number.isRequired,
      yearEnd: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
    }).isRequired,
};
export default Degree;
