import React, { useState, useCallback } from 'react';
import { CallInfo } from './Info';

const UseCall = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // theme를 변경시에는 호출되지 않음.
  // const getItems = useCallback(() => {
  //   return [number, number + 1, number + 2]
  // }, [number]);
  const getItems = () => {
    return [number, number + 1, number + 2]
  };

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  }

  const onClickHandler = () => {
    return setDark(prevDark => !prevDark);
  };

  return (
    <>
      <div style= { theme }>
        <input
          type="number"
          value={ number }
          onChange={ e => setNumber(() => {
            return e.target.value ? parseInt(e.target.value) : 0;
          }) }
        />
        <button onClick={ onClickHandler }>테마 변경</button>
        <CallInfo getItems={ getItems } />
      </div>
    </>
  );
}

export default UseCall;