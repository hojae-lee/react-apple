import React from 'react';
import { Link, Route } from 'react-router-dom';
import paramSample from './paramSample';

const SubRoute = () => {
  return (
    <div>
      <Route
        path="/mainrouter"
        exact
        render={() => <div>서브 라우터입니다.</div>}
      />
      <Route path="/mainrouter/:param" component={ paramSample } />
    </div>
  );
};

export default SubRoute;