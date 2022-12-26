import './App.css';
import { useState, useRef, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios'
import Login from './components/Login'
import {Welcome} from './components/Welcome'


function App() {
  const [user, setUser] = useState(null)
  const mounted = useRef(false)
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`
      const {data} = await axios.get(url, {withCredentials: true})
      setUser(data.user._json)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect (() => {
    if(mounted === false) {
      getUser()
      mounted = true
    }
  },[])

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/Coding-Community' element={user ? <Welcome/> : <Navigate to='/login'/>} />
          <Route path='/login' element={user? <Navigate to='/' /> : <Login/>}/>
        </Routes>
      </Router>
    </>
    
      
  );
}

export default App;
