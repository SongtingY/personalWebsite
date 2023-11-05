import React from 'react';
import PropTypes from 'prop-types';


const SBDComponents = ({ data, unit, convertWeight, index }) => (
  <div className='container'>
    <div className='info'>{data.name}:</div>
    <div className='number' style={{paddingRight: index == 2? '35px' : 0 }}>
        <b>{unit === 'kg' ? convertWeight(data.currentWeight, 'LBS') : data.currentWeight}</b> {unit}
    </div>
    <div className='number'>
        <b>{unit === 'kg' ? convertWeight(data.goalWeight, 'LBS') : data.goalWeight}</b> {unit}
    </div>
  </div>
);


SBDComponents.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    currentWeight: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired,
  }).isRequired,
  unit: PropTypes.string.isRequired,
  convertWeight: PropTypes.func.isRequired,
};

export default SBDComponents;