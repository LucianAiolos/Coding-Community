import {useState, useRef, useEffect} from 'react'

const Home = () => {
  const mounted = useRef(false)
  const [callData, setCallData] = useState({})

  useEffect(() => {
    if(mounted.current === false) {
      callHome()
      mounted.current = true
    }

    
  }, [])
  
  const callHome = async () => {
    const res = fetch('http://localhost:9000/home')

    // const data = await res.json()

    console.log(res)
  }
  
  return (
    <div>
      PHONE HOME!
    </div>
  )
}

export default Home
