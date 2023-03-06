import React, { useState } from "react";

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
          <span className = {window.cLang === 'RU'? "RU langActive": "RU"}> меньше</span>
          <span className = {window.cLang === 'UZ'? "UZ langActive": "UZ"}>kamroq ko'rsatish</span></> 
          }
        </span>
      </p>
    );
  }
  export default ReadMore