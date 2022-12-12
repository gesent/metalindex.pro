//import React from 'react';
import React, { useState } from "react";
import {adcatalog} from './tempBase'

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 230) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? 
        <>
        <span className = {window.cLang === 'US'? "US langActive": "US"}>...read more</span>
        <span className = {window.cLang === 'RU'? "RU langActive": "RU"}>...читать далее</span>
        <span className = {window.cLang === 'UZ'? "UZ langActive": "UZ"}>...ko'proq o'qing</span></> 
        : 
        // " show less"
        <>
        <span className = {window.cLang === 'US'? "US langActive": "US"}>show less</span>
        <span className = {window.cLang === 'RU'? "RU langActive": "RU"}>показывай меньше</span>
        <span className = {window.cLang === 'UZ'? "UZ langActive": "UZ"}>kamroq ko'rsatish</span></> 
        }
      </span>
    </p>
  );
};

 const Catalog = (props) => {
     return ( 
    <div className='Catalog'>
        {adcatalog.map((ad) => ( 
        <div className="ad" key = {ad.id} id = {ad.id}>
            <div className="compLogo"><img alt="compLogo" src=  {ad.img} /></div>
            
            <div className= {window.cLang === 'US'? "compName US langActive": "compName US"} >{ad.Name[0].US}</div>
            <div className={window.cLang === 'RU'? "compName RU langActive": "compName RU"}  >{ad.Name[0].RU}</div>
            <div className= {window.cLang === 'UZ'? "compName UZ langActive": "compName UZ"}  >{ad.Name[0].UZ}</div>
            <div id = 'contactGroup'>
                <div className= {window.cLang === 'US'? "ContactName US langActive": "ContactName US"}>Contact: {ad.Contact}</div>
                <div className= {window.cLang === 'RU'? "ContactName RU langActive": "ContactName RU"}>Контакт: {ad.Contact}</div>
                <div className= {window.cLang === 'UZ'? "ContactName UZ langActive": "ContactName UZ"}>Aloqa: {ad.Contact}</div>

                <div className= {window.cLang === 'US'? "ContactEmail US langActive": "ContactEmail US"}>Email: {ad.Email}</div>
                <div className= {window.cLang === 'RU'? "ContactEmail RU langActive": "ContactEmail RU"}>Эл. адрес: {ad.Email}</div>
                <div className= {window.cLang === 'UZ'? "ContactEmail UZ langActive": "ContactEmail UZ"}>Elektron pochta: {ad.Email}</div>

                <div className= {window.cLang === 'US'? "ContactPhone US langActive": "ContactPhone US"}>Phone: {ad.Phone}</div>
                <div className= {window.cLang === 'RU'? "ContactPhone RU langActive": "ContactPhone RU"}>Телефон: {ad.Phone}</div>
                <div className= {window.cLang === 'UZ'? "ContactPhone UZ langActive": "ContactPhone UZ"}>Telefon: {ad.Phone}</div>
            </div>
            <div className= {window.cLang === 'US'? "compDescp US langActive": "compDescp US"} id = {"compDescp"  + ad.id}><ReadMore>{ad.text[0].US}</ReadMore></div>
            <div className= {window.cLang === 'RU'? "compDescp RU langActive": "compDescp RU"}  id = {"compDescp"  + ad.id}><ReadMore>{ad.text[0].RU}</ReadMore></div>
            <div className= {window.cLang === 'UZ'? "compDescp UZ langActive": "compDescp UZ"}  id = {"compDescp"  + ad.id}><ReadMore>{ad.text[0].UZ}</ReadMore></div>

            <div className="links"><a href={ad.file} download>{ad.file}</a></div>
        </div>
        ))}
    </div>
  )
}

export default Catalog