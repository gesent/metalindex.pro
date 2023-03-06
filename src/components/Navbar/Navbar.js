//import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='./Catalog'>
            <span className = 'US'>CATALOG</span>
            <span className = 'RU'>КАТАЛОГ</span>
            <span className = 'UZ'>KATALOG</span>
          </NavLink>
          <NavLink to='/About'>
            <span className = 'US'>ABOUT US</span>
            <span className = 'RU'>О НАС</span>
            <span className = 'UZ'>BIZ HAQIMIZDA</span>
          </NavLink>
          <NavLink to='/Join'>
          <span className = 'US'>JOIN US</span>
          <span className = 'RU'>ПРИСОЕДИНЯЙТЕСЬ</span>
          <span className = 'UZ'>BIZGA QO'SHILING</span>
          </NavLink>
          {/* <div className='NavlineTop'> 
          <LangChange id ="US"/>
          <LangChange id ="RU"/>
          <LangChange id ="UZ"/>
        </div> */}
        {/* LangChange={() => window.cLang = "US" */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
