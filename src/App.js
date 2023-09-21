import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './Components/LandingPage/Landing'

import View from './Components/View/View';


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
