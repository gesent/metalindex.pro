//import React from 'react';
import $ from 'jquery';

const SetLang = (id) =>
{
  $('.'+ window.cLang).removeClass('langActive');
  window.cLang = id.toUpperCase();
  $('.'+ window.cLang).addClass('langActive');
  
  switch(window.cLang) {
    case 'US':
      return  $('#SearchField').attr("placeholder", "Search");
      case 'RU':
      return  $('#SearchField').attr("placeholder", "Поиск");
      case 'UZ':
      return  $('#SearchField').attr("placeholder", "Qidirmoq");
      default: return  $('#SearchField').attr("placeholder", "Search");
  }
 }  

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