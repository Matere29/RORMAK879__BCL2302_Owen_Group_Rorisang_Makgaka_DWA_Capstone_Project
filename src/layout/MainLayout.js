import React from 'react'
import Navbar from '../Components/Navbar'
export default function MainLayout({children}) {
  return (
    <div>
    <Navbar />
    <div>{children}</div>
</div>
  )
}

