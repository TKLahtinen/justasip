import React from 'react'
import '../styles/Home.css'
import Searchbox from '../components/Searchbox'
import Showcase from '../components/Showcase'

const Home = () => {
  return (
    <div className='mainContainer'>
      <h1>Just a little sip</h1>
      <Searchbox />
      <Showcase label='Alcoholic'/>
      <Showcase label='Non Alcoholic'/>
    </div>
  )
}

export default Home
