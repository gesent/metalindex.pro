//import React from 'react';
import {useEffect} from 'react'
import Logo from '../logo.png';
import LangChange from './LangCange'
import Log from './Log'


const Header = () => {
  
  useEffect(() => {
    const getData = async () => {
      const res = await fetch ('https://geolocation-db.com/json/')
      const json = await res.json();

      return json;
    }
         
    getData().then((value) => {

    window.IPv4 = value.IPv4;
    window.country_name = value.country_name; 
  })
  .catch((err) => {
    console.log(err); 
  });
  
}, []);

 Log("Visit");
  return (
    <div className="Header">
    <div className="logo"><img alt="logo" src={Logo} /></div>
    <div className='LangChange'>    
      <LangChange id ="US"/>
      <LangChange id ="RU"/>
      <LangChange id ="UZ"/>
    </div>

    </div>
  )
}

export default Header
