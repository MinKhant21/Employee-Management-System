import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import openSocket from 'socket.io-client'

export default function index() {
  let baseUrl = useSelector(state=>state.user.baseUrl)
  let [noti,setNoti] = useState('')
  console.log(baseUrl)
  let socket = openSocket(baseUrl)
  socket.on('noti',data=>{
    setNoti(data.message)
  })
  return (
    <div>Employee
      {noti}
    </div>
  )
}
