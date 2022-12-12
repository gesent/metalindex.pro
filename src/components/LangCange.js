import React from 'react';
import SetLang from './SetLang'


const logos = {
    "US": '../img/us.svg',
    "RU": '../img/ru.svg',
    "UZ": '../img/uz.svg',
    
  };

export const LangCange = ({id}) => {
var Logo =  logos[id] ;

return (

  <div  id = {id} className="lang" onClick={() => SetLang(id)}><img alt={id} src={Logo}/></div>

  )
}
export default LangCange