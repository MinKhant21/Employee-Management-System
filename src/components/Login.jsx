import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const HandleLogin = (e) =>{
        e.preventDefault();
        alert('hit')
    }
  return (
    <div className='center'>
        <div className='p-5' style={{borderRadius:'15px',boxShadow:" rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
          <b>Login Form</b>
          <hr />
          <form onSubmit={HandleLogin}>
            <div className="form-group">
                <label className='form-label'>Enter Your Email</label>
                <input type="text" className='form-control' />
            </div>
            <br />
            <div className="form-group">
                <label className='form-label'>Enter Your Password</label>
                <input type="password" className='form-control' />
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
