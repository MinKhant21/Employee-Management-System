import React from 'react'
import './Nav.css'
import Photo from './default.jpeg'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <nav id="sidebar">
    <div className="custom-menu">
      <button type="button" id="sidebarCollapse" className="btn btn-primary">
        <i className="fa fa-bars"></i>
        <span className="sr-only">Toggle Menu</span>
      </button>
    </div>
    <div className="p-4 pt-5">
      <h1 style={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>
        <img src={Photo} style={{width:"70px",height:"70px",borderRadius:'10px'}} alt="" />
      </h1>
      <ul className="list-unstyled components mb-5"> 
        <li>
          <Link to="/admin-dashboard">DashBoard</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/employee">Employee</Link>
        </li>
        <li>
          <Link to="/admin-dashboard/notification">Employee</Link>
        </li>
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
                <a href="#">Page 1</a>
            </li>
            <li>
                <a href="#">Page 2</a>
            </li>
            <li>
                <a href="#">Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="mb-5">
        <h3 className="h6">Subscribe for newsletter</h3>
        <form action="#" className="colorlib-subscribe-form">
          <div className="form-group d-flex">
            <div className="icon"><span className="icon-paper-plane"></span></div>
            <input type="text" className="form-control" placeholder="Enter Email Address"/>
          </div>
        </form>
      </div>

      <div className="footer">
        <p>
          Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
        </p>
      </div>

    </div>
  </nav>
  )
}
