import React from 'react';
import PropTypes from 'prop-types';

const Basic = ({ data }) => (
    
      <div className='container'>
        <div className='info'>{data.info}:</div>
        <div className='number'><b>{data.stat}</b>  {data.measurement}</div>
      </div>
);

const BasicSta = ({ data }) => (
    <div className="basicStatists">
        <div className="link-to" id="stat" />
        <div className="title">
            <h3>Basic Statistics</h3>
        </div>
        <article className="basic-container">
            {data.map((sta) => (
            <Basic
                data={sta}
                key={sta.info}
            />
            ))}
        </article>
    </div>
);

BasicSta.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      info: PropTypes.string,
      stat: PropTypes.number,
      measurement: PropTypes.string,
    })),
};

Basic.propTypes = {
    data: PropTypes.shape({
      info: PropTypes.string.isRequired,
      stat: PropTypes.number.isRequired,
      measurement: PropTypes.string.isRequired,
    }).isRequired,
};
export default BasicSta;
