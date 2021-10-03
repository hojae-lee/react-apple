import React from 'react';
import { useSelector } from 'react-redux';

const Contents = () => {
  const name = useSelector(state => state.name);
  const desc = useSelector(state => state.desc);

  return (
    <div>
      <h1>{ name }</h1>
      <p>{ desc }</p>
    </div>
  );
};

export default Contents;