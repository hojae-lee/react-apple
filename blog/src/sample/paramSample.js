import React from 'react';

const ParamSample = ({ ...props }) => {
  const params = props.match.params;
  return (
    <div>
      <h1>paramSample</h1>
      <h2>받은 파라미터: { params.param }</h2>
    </div>
  );
};

export default ParamSample;