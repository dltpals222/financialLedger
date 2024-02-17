import { Route, Router, Routes } from 'react-router-dom';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import First from './views/admin/first/First';
import Second from './views/admin/second/Second';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='"/"' Component={First}></Route>
        <Route path='"/second"' Component={Second}></Route>
      </Routes>
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
