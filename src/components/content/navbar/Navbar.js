import React from 'react';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '../../../hooks/hooks';

import './navbar.scss'




const Navbar = () => {

 
  const isDesktop = useMediaQuery('(min-width: 1000px)');

  return (

    <nav className={`navbar navbar-expand-lg navbar-light bg-primary ${isDesktop?'fixed-top':''} `}>
      <div className=" container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">

          <ul className="navbar-nav me-auto ">
            <li className='nav-item'>
              <NavLink className='mknavlink' to={'/'}>
                <p className="nav-link  ">Home</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='mknavlink' to={'/projects'}>
                <p className="nav-link" >Projects</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='mknavlink' to={'/java'}>
                <p className="nav-link" >About</p>
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink  className='mknavlink' to={'/matematicas'}>
                <p className="nav-link" >Contact</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='mknavlink' to={'/user'}>
                <p className="nav-link" >User</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
