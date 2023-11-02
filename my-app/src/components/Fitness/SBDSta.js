import React from 'react';
import PropTypes from 'prop-types';

const WeightConverter = ({ initialWeight, initialUnit }) => {
    const [weight, setWeight] = useState(initialWeight);
    const [unit, setUnit] = useState(initialUnit);
  
const convertWeight = (currentUnit, weight) => {
    return currentUnit === 'kg' ? weight * 2.20462 : weight / 2.20462;
};
  
const toggleUnit = () => {
    const newUnit = unit === 'kg' ? 'lbs' : 'kg';
    setWeight((prevWeight) => convertWeight(unit, prevWeight).toFixed(2));
    setUnit(newUnit);
};

const Basic = ({ data }) => (
    
      <div className='container'>
        <div className='info'>{data.info}:</div>
        <div>
        <div className='number'><b>{data.stat}</b>  {data.measurement}</div>
        <button onClick={toggleUnit}>
            {unit === 'kg' ? 'lbs' : 'kg'}
        </button>
        </div>
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
