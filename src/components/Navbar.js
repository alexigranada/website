import React, { useState }  from 'react';
import { NavLink, Link } from 'react-router-dom';
import Cover from './Cover';

const Navbar = () => {

  const [active, setActive] = useState('menu');
  const [toggleIcon, setToggleIcon] = useState('menu_btn')
  
  const navToggle = () => {
    active === 'menu' ? setActive('menu menu_open') : setActive('menu');
    toggleIcon === 'menu_btn' ? setToggleIcon('menu_btn toggle'): setToggleIcon('menu_btn')
  };

  return (

    <nav>
        <div className='container'>  
            <div>
                <Link to='/' className='brand'>[Alex | Granada]</Link>
            </div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contacto'>Contacto</NavLink></li>
                <li><NavLink to='/geovisor'>Geovisor</NavLink></li>
                <li><a href='#'><span className='fas fa-magnifying-glass'></span></a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar