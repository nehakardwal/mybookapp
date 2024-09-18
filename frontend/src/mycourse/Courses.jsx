import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

import { useNavigate } from 'react-router-dom'
import { Authcontext } from '../context/Authprovider';



function Courses() {
  const {authuser} = useContext(Authcontext)
  const navigate = useNavigate()

  console.log(authuser)

  useEffect(() => {

    if(!authuser) {
      navigate('/signup');
      return
    }
  })


  return (
    <>
    <Navbar/>
    <div className='min-h-screen  mt-40' style={{backgroundColor:'white'}}>
    <Course/>

    </div>

    <Footer/>
    
    
    </>
    
  )
}

export default Courses

