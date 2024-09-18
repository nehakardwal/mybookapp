import React, { useContext } from 'react'
import Home from './home/Home'
import { Route ,Routes}from "react-router-dom"
import Courses from './mycourse/Courses'
import Signup from './components/Signup'
import  toast, { Toaster } from 'react-hot-toast';
import {Authcontext} from "./context/Authprovider";



function App() {
  const{authuser}=useContext(Authcontext);
  
  console.log(authuser);
  return (
    <>
    {/* <Home/>
    <Course/> */}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses />}/>
      {/* <Route path='/signup' element={<><p>hello from new page</p></>}/> */}
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Toaster />
  
    
  </>
   
  )
}

export default App

