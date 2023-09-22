import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../features/userSlice'

export default function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  let user = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const HandleLogin = (e) =>{
      e.preventDefault();
      const data = {
        email,password
      }
     
      fetch("http://localhost:2000/api/login",{
        method:'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Origin": "http://localhost:2000",
          "Access-Control-Allow-Methods":" GET, POST, PUT",
          "Access-Control-Allow-Headers": "Content-Type"
        },
        body:JSON.stringify(data)
      })
      .then((res)=>{
        if(!res.ok){
          throw Error('Network Error');
        }
        return res.json();
      })
      .then((res)=>{
        if(res.status == 200){
            dispatch(login(res))
            console.log(user)
        }
      })
      .catch((e)=>{
        console.error('Faild',e)
      })
  }

  return (
    <div className='center'>
        <div className='p-5' style={{borderRadius:'15px',boxShadow:" rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
          <b>Login Form</b>
          <hr />
          <form onSubmit={HandleLogin}>
            <div className="form-group">
                <label className='form-label'>Enter Your Email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} className='form-control' />
            </div>
            <br />
            <div className="form-group">
                <label className='form-label'>Enter Your Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control' />
            </div>
            <br />
            <div className="form-group">
                <input type="submit" value="Login" className='btn btn-md btn-success' />
            </div>
          </form>
        </div>
      </div>
  )
}
