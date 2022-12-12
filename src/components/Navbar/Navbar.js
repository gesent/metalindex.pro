import React from 'react';
import LangChange from '../LangCange'
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
          <div className='NavlineTop'> 
          <LangChange id ="US"/>
          <LangChange id ="RU"/>
          <LangChange id ="UZ"/>
        </div>
        {/* LangChange={() => window.cLang = "US" */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;










// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import US from '../img/us.svg';
// import RU from '../img/ru.svg';
// import UZ from '../img/uz.svg';
// import React from 'react';
// import About from './About'
// import Catalog from './Catalog'
// import Join from './Join'

// const Navline = () => {
 
//   return (
//     <div className="Navline">
//         <div  id = 'Catalog' className='NavlineTop' onClick={OnClick}>CATALOG</div>
//         <div  id = "About" className='NavlineTop' onClick={OnClick}>ABOUT US</div>
//         <div  id = "Join" className='NavlineTop'  onClick={OnClick}>JOIN US</div>
        
//         <div className='NavlineTop'> 
//           <div  id = "US" className="lang"><img alt="US" src={US} onClick={() => window.cLang = "US"}/></div>
//           <div  id = "RU" className="lang"><img alt="RU" src={RU} onClick={() => window.cLang = "RU"}/></div>
//           <div  id = "UZ" className="lang"><img alt="UZ" src={UZ} onClick={() => window.cLang = "UZ"}/></div>
//         </div>
//     </div>
//   )
// }


// export default Navline
