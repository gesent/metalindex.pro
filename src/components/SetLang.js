import $ from 'jquery';
function SetLang(id)
{
  $('.'+ window.cLang).removeClass('langActive');
  window.cLang = id.toUpperCase();
  $('.'+ window.cLang).addClass('langActive');

}  

export default SetLang