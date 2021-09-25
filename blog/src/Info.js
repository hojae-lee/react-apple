import React, { useState, useEffect, useMemo } from 'react';

const MemoInfo = (props) => {
  const getColor = color => {
    console.log('getColor!');
    const colorArray = ['빨간색', '노란색', '주황색', '초록색', '파랑색', '보라색'];
    if (colorArray.indexOf(color) > -1) return colorArray[colorArray.indexOf(color)];
    else return color;
  };

  const getMovie = movie => {
    console.log('getMovie!');
    const movieArray = ['액션', '코미디', '호러', '판타지'];
    if (movieArray.indexOf(movie) > -1) return movieArray[movieArray.indexOf(movie)];
    else return movie;
  };

  const useMemoColor = useMemo(() => getColor(props.color), [props.color]);
  const useMemoMovie = useMemo(() => getMovie(props.movie), [props.movie]);

  return (
    <>
      <div>
        제가 좋아하는 색상은 { useMemoColor } 이고, 좋아하는 영화는 { useMemoMovie } 입니다.
      </div>
    </>
  )
};

const CallInfo = (props) => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(props.getItems);
    console.log('숫자가 변경되었습니다.');
  }, [props.getItems]);

  return (
    <>
      {
        items.map((item, index) => <div key={index}>{item}</div>)
      }
    </>
  )
}

export { MemoInfo, CallInfo };