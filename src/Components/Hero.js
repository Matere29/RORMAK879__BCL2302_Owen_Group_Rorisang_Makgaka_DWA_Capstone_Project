import React from 'react'
import mic from './mic.png'





export default function Hero() {
  return (
    <section  className='hero'>
        {/* <h2 className='hero--header'>You may be interested in...</h2> */}
        <img src={mic}  alt="mic" className='hero--photo'/>
      
       
    </section>
  )
}

