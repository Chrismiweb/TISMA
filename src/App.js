import logo from './logo.svg';
import './App.css';
import View from './Components/View/View';
import AboutDesigner from './Components/View/AboutDesigner';
import AvailableProduct from './Components/View/AvailableProduct';
import Review from './Components/View/Review';
import Contact from './Components/View/Contact';

function App() {
  return (
    <div className="App">
        <View/>
        <AboutDesigner/>
        <AvailableProduct/>
        <Review/>
        <Contact/>
    </div>
  );
}

export default App;
