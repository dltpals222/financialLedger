import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import First from '../../views/admin/first/first';

const FirstRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<First />}></Route>
    </Routes>
  );
};

export default FirstRoutes;
