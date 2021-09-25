import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const test = 100;

// reducer 라고 부름
function reducer(state = test, action) {
  if (action.type === '증가') {
    state++;
  } else if (action.type === '감소') {
    state--;
  }
  return state;
}

let store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
