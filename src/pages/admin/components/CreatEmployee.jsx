import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function CreatEmployee() {
    const userToken = useSelector((state)=>state.user.token)
    const url = useSelector((state)=>state.user.url)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [salary,setSalary] = useState('')
    const navigate = useNavigate();

    const HandleEmployeeForm = (e) =>{
        e.preventDefault();
        let data = {
            name,email,password,phone,salary
        }
        postEmployee(data)
    }
    const postEmployee = async(data) =>{
        // await fetch(`${url}employee/create`,{
        //     headers:{
        //         'x-auth-token' : userToken
        //     }
        // }).then((res)=>{
        //     return res.json()
        // }).then((data)=>{
        //     if(data.status == 200){
        //     //   navigate('/admin-dashboard')
        //     }
        // })
        await fetch(`${url}employee/create`,{
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
      .then((res)=>{
        if(!res.ok){
          throw Error('Network Error');
        }
        return res.json();
      })
      .then((res)=>{
        if(res.status == 200){
            navigate('/admin-dashboard/employee')
        }
      })
      .catch((e)=>{
        console.error('Faild',e)
      })
    }
  return (
    <div id="content" >
        <div className="container">
            <form onSubmit={HandleEmployeeForm}>
                <div className="form-group">
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type="text" placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} name='name' className='form-control' />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} name='email' className='form-control' />
                </div>
                <div className="form-group">
                    <label htmlFor="name" className='form-label'>Phone</label>
                    <input type="text" placeholder='Enter Your Phone' onChange={(e)=>setPhone(e.target.value)} name='name' className='form-control' />
                </div>
                <div className="form-group">
                    <label htmlFor="salary" className='form-label'>Salary</label>
                    <input type="text" placeholder='Enter Your Salary' name='salary' onChange={(e)=>setSalary(e.target.value)} className='form-control' />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input type="password" placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} name='password' className='form-control' />
                </div>
                <div className="form-group">
                    <input type="submit"  className='form-control btn btn-md btn-primary' />
                </div>
            </form>
        </div>
  </div>
  )
}
