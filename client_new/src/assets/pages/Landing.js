import logo from '../images/logo.svg'
import main from '../images/main.svg'
import { useEffect } from 'react'

const Landing = () => {
  const fetchData = async () => {
    const res = await fetch('/api2')
    const data = await res.json()
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return <div>Landing Page</div>
}

export default Landing
