import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import NavBar from './layout/Nav';
import { Link, Outlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

function DashBoard() {
  const location = useLocation(); // Use useLocation within a function component
  return (
    <>
      <div className="wrapper d-flex align-items-stretch">
        <NavBar />
        <SwitchTransition>
          <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
            <div className="p-4 max-w-6xl ">
              <Outlet />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}

export default DashBoard;





