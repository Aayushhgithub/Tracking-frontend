import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Tracking from './Trackingpage.jsx';
import Signin from './Signin.jsx';

const App = () => {
  return (
    <div className='px-3'>
     
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/tracking' element={<Tracking />} />
        </Routes>
     
    </div>
  );
}

export default App;
