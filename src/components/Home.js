import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  
  return (
    <div className='home'>
        <h1>ASIAN THALI</h1>
        <h2>COUNT THE MEMORIES, NOT THE CALORIES....</h2>
        <button className='btn btn-primary' onClick={() => { navigate("/Menu") }}>CHOOSE DISHES</button>
    </div>
  )
}

export default Home