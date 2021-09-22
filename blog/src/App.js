/* eslint-disable */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

// 리액트는 데이터 바인딩(서버에서 받아온 데이터를 html에 박아 표시해줌 ^^.)이 쉽기 때문에 쓰는거임. ex: { 변수명 }
function App() {
  let posts = '강남 고기 맛집'
  let divStyle = { color: 'blue', fontSize: '30px' };

  const test = useSelector(state => state);
  // redux에서 컴포넌트에서 state 요청 수정요청하려면 dispatch 를 사용합니다.
  const dispatch = useDispatch();

  function Func() {
    return 'Function';
  }
  // 데이터는 변수에 넣어 보관을 하던가 state에 넣던가
  // ES6 destrucuring 문법 array, object에 있던 자료를 변수에 쉽게 담고 싶을 때
  /*
  var [a, b] = [10, 100];
  */
  let [a, b] = useState(['글제목0', '글제목1', '글제목2']); // -> [a(남자 코트 추천), b(남자 코트 추천 state 정정해주는 함수가 들어갑니다.)]
  // state는 변수 대신 쓰는 데이터 저장공간, useState()를 이용해 만들어야함.
  // state에 데이터 저장해놓는 이유: 웹이 App처럼 동작하게 만들고 싶어서 ㅇㅇㅇㅇㅇㅇㅇ. state는 변경되면 HTML이 자동으로 재렌더링이 됩니다(스무스해짐.).
  // state 데이터는 직접 수정이 불가능하다.

  function changeTitle () {
    let newA = [];
    for (let i = 0; i < a.length; i++) {
      a[i] === '글제목0' ? newA.push('새로운글제목0') : newA.push(a[i]);
    }
    b(newA);
  }

  let [cnt, cntFunc] = useState(0);
  // state는 변경 함수를 이용해야 변경 시킬 수 있음.

  return (
    // 태그에 class를 주고 싶으면 className을 줘야함. JSX 문법
    // JSX에서 style 속성 집어 넣을 때 style = { object 자료형으로 만든 스타일 }, camelCase 작명관습에 따라 속성명을 바꿔주셈. 귀찮으니 className을 사용합시다..

    <div className="App">
      <div className="black-nav">
        <div style={ divStyle }>{ test }</div>
      </div>
      {/* <h4>{ posts }</h4> */}
      {/* <h4>{ Func() }</h4> */}
      {/* <img src={ logo }></img> */}

      <button onClick={ () => { dispatch({type: '증가'}) } }>제목 증가</button>
      <button onClick={ () => { dispatch({type: '감소'}) } }>제목 감소</button>
      <div className="list">
        <h3>{ a[0] } <span onClick={ () => { cntFunc(cnt + 1) } }>👍</span> { cnt } </h3>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h3>{ a[1] }</h3>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h3>{ a[2] }</h3>
        <p>2월 19일 발행</p>
      </div>
    </div>
  );
}

export default App;
