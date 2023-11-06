import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SBDComponents from './SBD/SBDComponents'; // Ensure you import SBD correctly

const LB_TO_KG = 0.45;
const KG_TO_LB = 2.20;

const convertWeight = (weight, currentUnit) => {
    return currentUnit === 'LBS' ? (weight * LB_TO_KG).toFixed(0) : (weight * KG_TO_LB).toFixed(2);
};

const SBDSta = ({ initialData }) => {

    // const [data, setData] = useState(initialData);
    
    const [unit, setUnit] = useState('LBS');

    const toggleWeightUnit = () => {
        const newUnit = unit === 'LBS' ? 'kg' : 'LBS';
        // setData(convertedData);
        setUnit(newUnit);
    };
    

    return (
        <div className="sbdStatists">
            <div className="title">
                <h3>SBD Statistics</h3>
            </div>
            <button onClick={toggleWeightUnit}>Switch to {unit === 'LBS' ? 'kg' : 'LBS'}</button>
            <div className='time'>
                <div><b>Current</b></div>
                <div><b>Goal</b></div>
            </div>
            <article className="sbd-container">
                {initialData.map((sta, index) => (
                <SBDComponents
                    key={sta.name}
                    data={sta}
                    unit={unit}
                    convertWeight={convertWeight}
                    index={index}
                />
                ))}
            </article>
        </div>
    );
};

SBDSta.propTypes = {
    initialData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        currentWeight: PropTypes.string,
        goalWeight: PropTypes.string,
        unit: PropTypes.string,
    })),
};

export default SBDSta;
