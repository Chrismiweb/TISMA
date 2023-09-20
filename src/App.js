import Signin from './Components/Signin/Signin.jsx';
import Signup from './Components/Signup/Signup.jsx';
import {BrowserRoute, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRoute>
      <Routes>
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/signin' element={<Signin/>}/> 
      </Routes>
    </BrowserRoute>
  );
}

export default App;
