import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Code-Community' element={<Home/>}/>
        </Routes>
      </Router>
    </>
    
      
  );
}

export default App;
