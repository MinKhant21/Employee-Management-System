import React from 'react'

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
                return <tr>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>23</td>
                    <td>09123456789</td>
                    <td>IT</td>
                    <td>PHP</td>
                </tr>
            })
        }
    </table>
  )
}
