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
      const {data} = await axios.get(url, {withCredentials: 'include'})
       console.log(data)
      setUser(data.user._json)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect (() => {
    if(mounted.current === false) {
      getUser()
      mounted.current = true
    }
  },[])

  console.log(user)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={user ? <Welcome user={user}/> : <Navigate to='/login'/>} />
          <Route path='/login' element={user? <Navigate to='/' /> : <Login/>}/>
        </Routes>
      </Router>
    </>
    
      
  );
}

export default App;
