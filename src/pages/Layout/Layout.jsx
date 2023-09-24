import React from 'react'
import { Link, Outlet,useLocation } from 'react-router-dom'
import { SwitchTransition , CSSTransition } from "react-transition-group"
export default function Layout() {

  return (
    <>
      <div className='center'>
        <div className='p-5' style={{borderRadius:'15px',boxShadow:" rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
          <div className='d-flex gap-4'>
            <Link to="login" className='btn btn-sm btn-primary'>Employee</Link>
            <Link to="login" className='btn btn-sm btn-success'>Admin</Link>
          </div>
        </div>
      </div>
      {/* <SwitchTransition>
        <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
            <div className="p-4 max-w-6xl mx-auto">
                <Outlet/>
            </div>
        </CSSTransition>
      </SwitchTransition> */}
    </>
  )
}
