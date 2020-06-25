import React from 'react';
import { Button } from 'antd';
import { onPredict } from '../../utils/timeseries';

const Predict = () => {
  return (
    <div>
      <Button onClick={onPredict}> Predict </Button>
    </div>
  );
};

Predict.propTypes = {};

export default Predict;
