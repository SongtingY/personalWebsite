import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Conversion constants
const LB_TO_KG = 0.45;
const KG_TO_LB = 2.20;
const FT_TO_CM = 30.38;
const CM_TO_FT = 0.032;

const convertWeight = (weight, currentUnit) => {
  return currentUnit === 'LBS' ? (weight * LB_TO_KG).toFixed(0) : (weight * KG_TO_LB).toFixed(2);
};

const convertHeight = (height, currentUnit) => {
  return currentUnit === 'FT' ? (height * FT_TO_CM).toFixed(0) : (height * CM_TO_FT).toFixed(2);
};

const BasicSta = ({ data }) => {
    const [weightUnit, setWeightUnit] = useState('LBS');
    const [heightUnit, setHeightUnit] = useState('FT');

    const toggleWeightUnit = () => {
      setWeightUnit(prevUnit => prevUnit === 'LBS' ? 'kg' : 'LBS');
    };

    const toggleHeightUnit = () => {
      setHeightUnit(prevUnit => prevUnit === 'FT' ? 'cm' : 'FT');
    };

    const displayWeight = weightUnit === 'LBS' ? data.weightNumLB : convertWeight(data.weightNumLB, 'LBS');
    const displayHeight = heightUnit === 'FT' ? data.heightNumFT : convertHeight(data.heightNumFT.replace("`", "."), 'FT');

    return (
        <div className="basicStatists">
            <div className="link-to" id="stat" />
            <div className="title">
                <h3>Basic Statistics</h3>
            </div>
            <article className="basic-container">
                <div className='container'>
                    <div className='info'>{data.age}:</div>
                    <div className='number'><b>{data.ageNum}</b> {data.ageUnit}</div>
                </div>
                <div className='container'>
                    <div className='info'>{data.weight}:</div>
                    <div className='number'><b>{displayWeight}</b> {weightUnit}</div>
                    <button onClick={toggleWeightUnit}>Switch to {weightUnit === 'LBS' ? 'kg' : 'LBS'}</button>
                </div>
                <div className='container'>
                    <div className='info'>{data.height}:</div>
                    <div className='number'><b>{displayHeight}</b> {heightUnit}</div>
                    <button onClick={toggleHeightUnit}>Switch to {heightUnit === 'FT' ? 'cm' : 'FT'}</button>
                </div>
            </article>
        </div>
    );
};


BasicSta.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
      age: PropTypes.string,
      ageNum: PropTypes.number,
      ageUnit: PropTypes.string,
      weight: PropTypes.string,
      weightNumLB: PropTypes.number,
      weightUnitLB: PropTypes.number,
      height: PropTypes.string,
      heightNumFT: PropTypes.number,
      heighttUnitFT: PropTypes.number,
    }))
};

export default BasicSta;
