import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import {Welcome} from './components/Welcome'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Coding-Community' element={<Home/>}/>
          <Route path='/Welcome' element={<Welcome/>} />
        </Routes>
      </Router>
    </>
    
      
  );
}

export default App;
