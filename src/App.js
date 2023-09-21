import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import View from './Components/View/View';
import Landing from './Components/LandingPage/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Landing/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
