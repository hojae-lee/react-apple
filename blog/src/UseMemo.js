import React, { useState, useEffect, useRef } from 'react';
import { MemoInfo } from './Info';

const Memo = () => {
  const [color, setColor] = useState("빨간색");
  const [movie, setMovie] = useState("어벤져스");

  const onChangeHandler = e => {
    if (e.target.id === "color") setColor(e.target.value);
    else setMovie(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          가장 좋아하는 컬러?
        </label>
        <input id="color" value= { color } onChange={ onChangeHandler } />
      </div>
      <div>
        <label>
          제일 좋아하는 영화장르는?
        </label>
        <input name="movie" value= { movie } onChange={ onChangeHandler } />
      </div>
      <MemoInfo color={ color } movie={ movie } />
    </div>
  );
}

export default Memo;