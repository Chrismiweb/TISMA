import React from 'react';
import Signin from './Components/Signin/Signin.jsx';
import Signup from './Components/Signup/Signup.jsx';
import {BrowserRouter, Routes, Route}  from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
