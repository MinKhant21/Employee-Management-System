import React from 'react'

export default function Employee({employee}) {
    console.log("hi")
  return (
    <tr>
    <td>{employee.id}</td>
    <td>{employee.name}</td>
    <td>23</td>
    <td>09123456789</td>
    <td>IT</td>
    <td>PHP</td>
    </tr>
  )
}
