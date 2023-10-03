import React from 'react'
import Employee from './Employee'

export default function EmployeeList({employees}) {
  return (
    <table className='table table-striped'>
        <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Deperment</th>
            <th>Postion</th>
        </tr>
        {
        employees.map((employee)=>{
            return(
                <Employee employee={employee} />
            )
        })
    }
    </table>
  )
}
