import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import View from './Components/View/View';

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/view' element={<View/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
