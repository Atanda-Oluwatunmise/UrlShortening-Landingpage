import React from 'react'
import '../styles/Home.css' 
//import BannerImage from '../assets/annie-spratt-yI3weKNBRTc-unsplash.jpg' 
//import BannerImage from '../assets/codioful-formerly-gradienta-7brhZmwXn08-unsplash.jpg' 

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'>
        <h1>Url Shortener</h1>
        <p>Shorten that annoying long url</p>
        <input name='myInput'/>
        <div className='buttonDiv'>
         <button>SHORTEN</button>
        </div>
      </div>
    </div>
  )
}

export default Home
