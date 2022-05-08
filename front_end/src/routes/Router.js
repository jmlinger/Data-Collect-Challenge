import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quiz from '../pages/Quiz';

function Router() {
  return (
    <Routes>
        <Route path='/' element={<Quiz/>} />
    </Routes>
  );
}

export default Router;