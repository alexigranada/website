import React, { useState } from 'react';

const Header = () => {
  
  const [active, setActive] = useState('menu');
  const [toggleIcon, setToggleIcon] = useState('menu_btn')

  const navToggle = () => {
    active === 'menu' ? setActive('menu menu_open') : setActive('menu');
    toggleIcon === 'menu_btn' ? setToggleIcon('menu_btn toggle'): setToggleIcon('menu_btn')
  };
    
  return (
    <header>
        <img src='/2.jpg' alt='img' className='main_imagen'></img>
        <aside>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className='social'>
                <li><a href='#'><span className='fas fa-book'></span></a></li>
                <li><a href='#'><span className='fab fa-github'></span></a></li>
                <li><a href='#'><span className='fab fa-linkedin'></span></a></li>
            </ul>
        </aside>
        <main>
            <nav>
                <div className='container'>
                    <div>
                        <a href='#' className='brand'>[Alex | Granada]</a>
                    </div>
                    <ul>
                        <li><a href='/' className='link_active'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contat</a></li>
                        <li><a href='#'>Geovisor</a></li>
                        <li><a href='#'><span className='fas fa-magnifying-glass'></span></a></li>
                    </ul>
                    <div onClick={navToggle} className={toggleIcon}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>
            <div className='header_body'>
                <div className='container'>
                    <div className='slider'>
                        <div>
                            <h1 className='slider_count'>/01</h1>
                            <div className='progress'>
                                <div></div>
                            </div>
                            <p className='slider_cntrl active'> Work</p>
                            <p className='slider_cntrl'>Prod</p>
                            <p className='slider_cntrl'>Feel</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className='title'>GEOMATICA</h1>
                            <p> Introduction
                                <span className='sub_title'>Collection</span>, xxx xxxx - xxxx-xxxx - xxx xxx
                                <u>
                                    NEW NEW NEW NEW
                                </u>
                            </p>
                            <ul className='pagination_mobile'>
                                <li className='pag_active'></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header_bottom'>
                <div className='container'>
                    <div>
                        <div className='item'>
                            <h4>Events</h4>
                            <small>Pop Up @ granada</small>
                            <small>Pop Up @ granada</small>
                            <a href='#'>Leer más</a>
                        </div>
                        <div className='item item_centered'>
                            <small>Pop Up @ granada</small>
                            <small>Pop Up @ granada</small>
                        </div>
                    </div>
                    <div>
                        <img src='/2.jpg' alt='img' className='thumbnail'></img>
                        <div>
                            <h4>News</h4>
                            <small>
                                A news Fake
                                <span className='sub_title'>Work Collection</span>, xxx xxx - xx - xxx
                            </small>
                            <a href='#'> Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <div className={active}>
            <ul>
                <li><a href='#'>Link1</a></li>
                <li><a href='#'>Link2</a></li>
                <li><a href='#'>Link3</a></li>
            </ul>
            <ul>
                <li><a href='/' className='link_active'>Home</a></li>
                <li><a href='#'>Prod1</a></li>
                <li><a href='#'>Prod2</a></li>
                <li><a href='#'>Prod1</a></li>
                <li><a href='#'>Prod2</a></li>
                <li><a href='#'><span>Buscar</span></a>
                </li>
            </ul>
            <ul>
                <li><a href='#'>Fb</a></li>
                <li><a href='#'>Tw</a></li>
                <li><a href='#'>in</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header