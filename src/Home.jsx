import React from 'react'
import './Home.css'
import heroImage from './images/hero-illustration.svg'

const Home = () => {
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <div className='hero-text'>
          <h1 className='hero-title'>Lessons and insights</h1>
          <p className='hero-title from-years'>from 8 years</p>
          <p className='hero-subtitle'>Where to grow your business as a photographer: site or social media?</p>
        </div>
        <button className='hero-button'>Register</button>
      </div>
      <div className='hero-illustration'>
        <img src={heroImage} alt='Hero illustration' className='hero-image' />
      </div>
    </div>
  )
}

export default Home
