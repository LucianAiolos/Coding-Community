import {useState, useRef, useEffect} from 'react'
import googleIcon from '../assets/googleIcon.svg'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const styles = {
    input: 'class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10',
  }

  const navigate = useNavigate()
  const mounted = useRef(false)
  const [signIn, setSignIn] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
  })


  useEffect(() => {
    if(mounted.current === false) {
      mounted.current = true
    }

  }, [])
  
  const onChange = (e) => {
    e.preventDefault()
    setFormData(prevState => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }
  
  const signInFunc = () => {

  }

  const signUpFunc = () => {
    
  }

  return (
    <div className='flex flex-col items-center'>
      <div className="hero mb-8">
        <h1 className='text-5xl mb-2 font-medium'>Coding Community</h1>
        <h2 className='text-3xl'>A place for coders, designers and thinkers.</h2>
      </div>
      <p className='mb-6'>Welcome, please sign in or create an account to join our wonderful community!</p>
      <form action="submit" className='mb-10 flex flex-col w-6/12'>
        {!signIn && 
          <>
            <label htmlFor="username">Full Name</label>
            <input className={styles.input} type="text"
              placeholder="" 
              name='username'
              value={formData.username}
              onChange={(e) => onChange(e)}
            />
          </>
        }
        <label htmlFor="email">Email</label>
        <input className={styles.input} type="email"
          placeholder='Email' 
          name="email"
          value={formData.email}
          onChange={(e)=> onChange(e)}
        />
        <label htmlFor="password">Password</label>
        <input className={styles.input} type="text"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={(e) => onChange(e)}
        />
        <button
          onClick={()=> {
            signIn ? signInFunc(formData) : signUpFunc(formData) }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-6/12 self-center"
        >{signIn ? 'Sign In' : 'Create Account'}
        </button>
      </form>
      <div className="google-signin-container flex flex-col items-center mb-12">
        <p className='font-medium'>Or</p>
        <p className='mb-4'>{signIn ? 'Sign in' : 'Sign up'} in with</p>
        <img className='w-8/12' src={googleIcon} alt="" />
      </div>
      <p onClick={() => setSignIn(!signIn)}>{signIn ? 'Create Account' : 'Sign In'}</p>
    </div>
  )
}

export default Home
