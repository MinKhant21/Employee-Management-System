import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Notification() {
    let [message,setMessage] = useState('')
    const userToken = useSelector((state)=>state.user.token)
    const user = useSelector((state)=>state.user.user)
    let [noti,setNoti] = useState('')
    let baseUrl = useSelector(state=>state.user.baseUrl)
    console.log(user)
   const HandleChat = (e) =>{
    e.preventDefault();
    
    let data = {
        user:user,
        message: message
    }
    fetch(`${baseUrl}api/notification`,{
        method:'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "http://localhost:2000",
            "Access-Control-Allow-Methods":" GET, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type",
            'x-auth-token' : userToken
          },
          body:JSON.stringify(data)
    })
    .then(data=>{
        // if(data.status == '200'){
        //     console.log('h')
        //     let socket = openSocket(baseUrl)
        //     socket.on('noti',(data) => {
        //         setNoti(data.message)
        //         console.log("hello world")
        //     })
        // }
    })
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
            <h1>{noti}</h1>
        </div>
  </div>
  )
}
