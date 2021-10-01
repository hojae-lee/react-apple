import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Sample1 from '../sample/sample1';
import Sample2 from '../sample/sample2';
import Sample3 from '../sample/sample3';
import ParamSample from '../sample/paramSample';
import MainRoute from '../sample/mainRouter';
import './Router.css';

const Router = () => {
  return (
    <BrowserRouter>
      <div className='menu'>
        <ul>
          <li>
            <Link to='/'>
              Sample1
            </Link>
          </li>
          <li>
            <Link to='/sample2'>
              Sample2
            </Link>
          </li>
          <li>
            <Link to='/sample3'>
              Sample3
            </Link>
          </li>
          <li>
            <Link to='/paramSample/hi'>
              param: hi
            </Link>
          </li>
          <li>
            <Link to='/paramSample/bye'>
              param: bye
            </Link>
          </li>
          <li>
            <Link to='/paramSample/bye'>
              param: bye
            </Link>
          </li>
          <li>
            <Link to='/mainrouter'>
              Main Router, Sub Router
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Route path="/" exact={ true } component={ Sample1 } />
        <Route path="/sample2" component={ Sample2 } />
        <Route path="/sample3" component={ Sample3 } />
        <Route path="/paramSample/:param" exact={ true } component={ ParamSample } />
        <Route path="/mainrouter" component= { MainRoute } />
      </div>
    </BrowserRouter>
  );
}

export default Router;