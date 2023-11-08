import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const Splits = ({ data, isImageLeft, index }) => (
    <article className="Split-container" style={{flexDirection: isImageLeft ? 'row' : 'row-reverse', alignItems: 'center', marginBottom: '20px' }}>
        <div className='descrip'>
            <header>
                <h4>{data.title}</h4>
                <p>{data.eplaination}</p>
            </header>
            <ul className="points">
                {Object.entries(data.split).map(([exercise, link]) => (
                <li key={exercise}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {exercise}
                </a>
                </li>
                ))}
            </ul>
        </div>
        <div className='images'>
            <img src={data.pic}/>
        </div>
    </article>
);

const SplitsSta = ({ data }) => (
    <div className="splitSta">
        <div className="link-to" id="split" />
            <div className="title">
                <h3>Current Split</h3>
            </div>
            <p className='summary'>I've put together a bunch of exercise guides for you – they're just a click away! Dive in and explore at your own pace. And hey, if you ever find yourself with a question or two, don't hesitate to <Link to="/contact">contatc me!</Link>  I'm all ears! </p>
            {data.map((job, index) => (
            <Splits
                data={job}
                key={job.title}
                isImageLeft={index % 2 === 0}
                index = {index}
            />
            ))}
            
    </div>
);

SplitsSta.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        eplaination: PropTypes.string,
        pic: PropTypes.string,
        split: PropTypes.arrayOf(PropTypes.string),
    })),
};

Splits.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        eplaination: PropTypes.string.isRequired,
        pic: PropTypes.string.isRequired,
        split: PropTypes.objectOf(
            PropTypes.string
        )
    }).isRequired,
};

export default SplitsSta;
