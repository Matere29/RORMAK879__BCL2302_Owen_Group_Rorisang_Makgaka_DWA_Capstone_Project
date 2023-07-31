import React from 'react'
import mic from './Images/mic.png'





export default function Hero() {
  return (
    <section className='hero'>
        
        <img src={mic}  alt="mic" className='hero--photo'/>
        <h2 className='hero--header'>You may be interested in...</h2>
       
    </section>
  )
}

