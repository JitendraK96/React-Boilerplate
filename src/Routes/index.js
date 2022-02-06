import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PageOne from '../Pages/Boilerplate/PageOne';
import PageTwo from '../Pages/Boilerplate/PageTwo';

export default function ProjectRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/page-one' exact element={<PageOne />} />
        <Route path='/page-two' exact element={<PageTwo />} />
      </Routes>
    </Router>
  )
};