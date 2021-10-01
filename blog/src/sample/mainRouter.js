import React from 'react';
import { Link, Route } from 'react-router-dom';
import SubRouter from './subRouter';

const MainRoute = () => {
  return (
    <div>
      <Link to='/mainrouter/sub'>
        <button type='button'>눌러주세요.</button>
      </Link>
      <Route
        path="/mainrouter"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/mainrouter/:param" component={ SubRouter } />
    </div>
  );
};

export default MainRoute;