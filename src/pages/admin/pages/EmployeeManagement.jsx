import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../../../components/Loading/Loading.jsx';
import EmployeeList from '../components/EmployeeList.jsx';

export default function EmployeeManagement() {

  const userToken = useSelector((state)=>state.user.token)
  const [employees,setEmployee] = useState([])
  const [loading,setLoading] = useState(true)

  const url = "http://localhost:2000/api/employee"

  const getEmployeeList = useCallback(async()=>{
    await fetch(url,{
      headers:{
        'x-auth-token' : userToken
      }
    })
    .then(res=>res.json())
    .then(data=>{
      setEmployee(data.data)
      setLoading(preState => preState = false)
    })
    .catch((error)=>console.log(error))
  },[url])

  useEffect(()=>{
    getEmployeeList();
  },[getEmployeeList])

  return (
    <div id="content" >
      <div className="container">
        <div className='' style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px'}}>
            <Link className='btn btn-sm btn-success'>Add</Link>
            <b><span>Employee Management</span></b>
        </div>
        <hr />
       {
        loading == true ?
          <Loading/>
        :
          <EmployeeList employees={employees}/>
       }
      </div>
    </div>
  )
}
