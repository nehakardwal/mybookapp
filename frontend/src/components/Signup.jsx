

import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => console.log(data)
  
  return (
    <div>
      <div className="flex h-screen items-center justify-center" style={{backgroundColor:"white"}}>
        <div className='border-[2px] shadow-md p-5 rounded-md w-[600px]'>
          <div className='modal_box'>
            <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
              <h3 className="font-bold text-lg">Signup</h3>
              
              <div className='mt-5 space-y-2'>
                <span>Name</span>
                <br />
                <input 
                  type="text" 
                  placeholder='Enter your Name' 
                  className='w-80 px-3 border rounded-md outline-none'
                  {...register("name", { required: true })} 
                />
                <br />
                {errors.name && <span className='text-sm text-red-700'>This is a required field</span>}
              </div>

              <div className='mt-5 space-y-2'>
                <span>Email</span>
                <br />
                <input 
                  type="text" 
                  placeholder='Enter your Email' 
                  className='w-80 px-3 border rounded-md outline-none'  
                  {...register("email", { required: true })} 
                />
                <br />
                {errors.email && <span className='text-sm text-red-700'>This is a required field</span>}
              </div>

              <div className='mt-5 space-y-2'>
                <span>Password</span>
                <br />
                <input 
                  type="text" 
                  placeholder='Enter your Password' 
                  className='w-80 px-3 border rounded-md outline-none'
                  {...register("password", { required: true })} 
                />
                <br />
                {errors.password && <span className='text-sm text-red-700'>This is a required field</span>}
              </div>

              <div className='flex justify-around pt-5 mt-2'>
                <button 
                  type="submit"
                  className='bg-pink-500 text-white pt-1 pb-1 pl-3 pr-3 rounded-md hover:bg-pink-700 duration-200'
                >
                  Signup
                </button>
                <p>
                  Have an Account?{""}
                  <button 
                    className='underline text-blue-500 cursor-pointer' 
                    onClick={() => document.getElementById("my_modal_5").showModal()}
                  >
                    Login
                  </button>
                  {""}
                  <Login/>
                </p>
              </div>
            </form>

            <div className="modal-action">
              <form method="dialog">
                <Link to="/" className="btn">Close</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup