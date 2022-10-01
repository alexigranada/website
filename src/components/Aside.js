import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {

  const [active, setActive] = useState('menu');
  const [toggleIcon, setToggleIcon] = useState('menu_btn')
  
  const navToggle = () => {
    active === 'menu' ? setActive('menu menu_open') : setActive('menu');
    toggleIcon === 'menu_btn' ? setToggleIcon('menu_btn toggle'): setToggleIcon('menu_btn')
  };

  return (
    <>
    <aside>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <ul className='social'>
            <li><a href='https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001884267'><span className='fas fa-book'></span></a></li>
            <li><a href='https://github.com/alexigranada'><span className='fab fa-github'></span></a></li>
            <li><a href='https://www.linkedin.com/in/alexigranada/'><span className='fab fa-linkedin'></span></a></li>
        </ul>
    </aside>  
    <div className={active}>
        <ul>
            <li><Link to='/'><a>Home</a></Link></li>
            <li><Link to='/about'><a>About</a></Link></li>
            <li><Link to='/home'><a>Contat</a></Link></li>
            <li><Link to='/geovisor'><a>Geovisor</a></Link></li>
            
        </ul>
        <ul>
            <li><a href='/' className='link_active'>Univalle</a></li>
            <li><a href='#'>GISMODEL</a></li>
            <li><a href='#'>Link</a></li>
            <li><a href='#'><span className='fas fa-magnifying-glass'></span></a></li>
        </ul>
        <ul>
            <li><a href='#'>Fb</a></li>
            <li><a href='#'>Tw</a></li>
            <li><a href='#'>in</a></li>
        </ul>
    </div>
    </>
  )
}

export default Aside