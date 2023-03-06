//import React from 'react';
import React, { useState } from "react";
import moment from 'moment';
const Join = (props) => {
 
  const [joinField, setjoinField] = useState();

  const handleJoinFormSubmit = (e) => {
    
    e.preventDefault();
  
    if(window.IPv4 !== "")
    { 
          var DT =  moment().format("YYYY-MM-DD HH:mm:ss"); 
          var statmentForm = "";
          statmentForm = "VisitorIP="+ window.IPv4 + "&VisitorContry=" + window.country_name + "&VisotrsLangudge=" + window.cLang + "&Massadge=" + joinField + "&DT=" + DT;
         
          fetch("http://localhost:3002/api/Msg?" + statmentForm)
          .then((response)=>{response.json()
            .then((json) => { 
              if(json.fieldCount === 0)
                {
                  switch(window.cLang) 
                    {
                      case 'US':alert('Thank your intrest.<br/>Waite to heare from us soon.'); break;
                      case 'RU':alert('Спосибо за ваш интерес к нашему проэкту. Мы скоро свяжимся с вами.'); break;
                      case 'UZ':alert('Etiboringiz uchun rahmat.<br/>Tez orada bizdan xabar kutib qolamiz.');break;
                      default:console.log(window.cLang); break;
                    }

                  document.getElementById('joinField').value = "";
                  const buttons  = document.getElementsByClassName('SubmitBtn');
                  for (let i = 0; i < buttons.length; i++) 
                  {
                    buttons[i].disabled=true;
                  }
                }
              //console.log(json); 
              }); 
            });  
      }  

}

  return (
    <div className='Join'>
      <div className="joinHeader">
        <span className = {window.cLang === 'US'? "US langActive": "US"}>If you interested and want to collaborate. Contact us and will work with you to include you in a list.<br/> If you have any suggestions or would like to ask us a question please drop us a line.  </span>
        <span className = {window.cLang === 'RU'? "RU langActive": "RU"}>Если вы заинтересованы и хотите сотрудничать. Свяжитесь с нами, и мы будем работать<br/> с вами, чтобы включить вас в список. Если у вас есть какие-либо предложения или вы хотите <br/>задать нам вопрос, пожалуйста, напишите нам.</span>
        <span  className = {window.cLang === 'UZ'? "UZ langActive": "UZ"}>Agar siz qiziqsangiz va hamkorlik qilishni istasangiz. Biz bilan bog'laning va sizni ro'yxatga kiritish uchun siz <br/>bilan birga ishlaydi. Agar sizda biron bir taklif bo'lsa yoki bizga savol berishni istasangiz, iltimos, bizga <br/>xat yozing.</span>
      </div>
       <div className="joinForm">
          <form id="joinform" onSubmit={handleJoinFormSubmit}>
        <textarea
          id = "joinField" 
          onChange = {(e) => setjoinField(e.target.value)} value = {joinField}
          rows={15}
          cols={100}
          
        /><br/>
        <input  className= {window.cLang === 'US'? "SubmitBtn US langActive": "SubmitBtn US"} id="joinField_submit" type="submit" value="Submit" />
        <input  className= {window.cLang === 'RU'? "SubmitBtn RU langActive": "SubmitBtn RU"} id="joinField_submit" type="submit" value="Отправить" />
        <input  className= {window.cLang === 'UZ'? "SubmitBtn UZ langActive": "SubmitBtn UZ"} id="joinField_submit" type="submit" value="Yuborish" />
      </form>
          </div>
    
    </div> 
  )
}

export default Join