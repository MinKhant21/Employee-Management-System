import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import openSocket from 'socket.io-client'
export default function Notification() {
    let [message,setMessage] = useState('')
    let baseUrl = useSelector(state=>state.user.baseUrl)
    console.log(baseUrl)
   const HandleChat = (e) =>{
    e.preventDefault();
    let socket = openSocket(baseUrl)
    socket.emit('noti',message)
   }
  return (
    <div id="content" >
        <div className="container">
            <form onSubmit={HandleChat}>
                <div className="form-group">
                    <label htmlFor="salary" className='form-label'>Salary</label>
                    <input type="text" placeholder='Enter Your Message' name='salary' onChange={(e)=>setMessage(e.target.value)} className='form-control' />
                </div>
                <div className="form-group">
                    <input type="submit"  className='form-control btn btn-md btn-primary' />
                </div>
            </form>
        </div>
  </div>
  )
}
