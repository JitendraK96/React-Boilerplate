import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PageOne from '../Pages/Boilerplate/PageOne';
import PageTwo from '../Pages/Boilerplate/PageTwo';
import AddLoan from '../Pages/Boilerplate/AddLoan';

export default function ProjectRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/page-one' exact element={<PageOne />} />
        <Route path='/page-two' exact element={<PageTwo />} />
        <Route path='/add-loans' exact element={<AddLoan />} />
      </Routes>
    </Router>
  )
};