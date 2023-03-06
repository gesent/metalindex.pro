import ReadMore from './ReadMore';
import {useState} from "react";
import Log from './Log'

const ActiveLink = ({ Type, Link, children}) => {
    if(Type === "mailto"){return <a href={`mailto:${Link}`}>{children}</a>;}
    if(Type === "tel"){return <a href={`tel:${Link}`}>{children}</a>;}
  };

const AdBuild = ({children}) => {
    const data = children;  
    const [DataArr, setDataArr] = useState(""); 
    const [adClick, setAdClick] = useState(""); 

    var targets = document.getElementsByClassName("ad");
    //`var adViewed = [0];

    function onItemClick(data) {setAdClick(data);}

    function inViewHandle(entries) 
    {
      var id = entries[0].target.id;

     // console.log(id); 
      
      if(!window.DisplayArray.includes(id))
        {
          window.DisplayArray.push(id);
          setDataArr('Display&AdId='+id);
        }      
      console.log(window.DisplayArray); 
    }
    
    var options = {
       root: null,
       threshold: [1],
       triggerOnce: true,
       delay: 1
    }
    
    var io = new IntersectionObserver(inViewHandle, options);
    for (var target of targets) {io.observe(target);}

  Log(DataArr);
  Log(adClick);

   //console.log(adClick);
    return(
        data.map((ad) => (      
    <div className="ad" key = {ad.idAd} id = {ad.idAd}>

        <div className="compLogo"><img alt="compLogo" src=  {ad.imgLink} /></div>
        
        <div className= {window.cLang === 'US'? "compName US langActive": "compName US"} >{ad.Name_US}</div>
        <div className={window.cLang === 'RU'? "compName RU langActive": "compName RU"} >{ad.Name_RU}</div>
        <div className= {window.cLang === 'UZ'? "compName UZ langActive": "compName UZ"} >{ad.Name_UZ}</div>
        
        <div id = 'contactGroup'>
            <div className= {window.cLang === 'US'? "ContactName US langActive": "ContactName US"}>Contact: {ad.Contact}</div>
            <div className= {window.cLang === 'RU'? "ContactName RU langActive": "ContactName RU"}>Контакт: {ad.Contact}</div>
            <div className= {window.cLang === 'UZ'? "ContactName UZ langActive": "ContactName UZ"}>Aloqa: {ad.Contact}</div>

             <div className= {window.cLang === 'US'? "ContactEmail US langActive": "ContactEmail US"} onClick={() => onItemClick('Click:Email&AdId='+ad.idAd)} >Email: <ActiveLink Type = "mailto" Link = {ad.Email}>{ad.Email}</ActiveLink></div>
             <div className= {window.cLang === 'RU'? "ContactEmail RU langActive": "ContactEmail RU"} onClick={() => onItemClick('Click:Email&AdId='+ad.idAd)}>Эл. адрес: <ActiveLink Type = "mailto" Link = {ad.Email}>{ad.Email}</ActiveLink></div>
             <div className= {window.cLang === 'UZ'? "ContactEmail UZ langActive": "ContactEmail UZ"} onClick={() => onItemClick('Click:Email&AdId='+ad.idAd)}>Elektron pochta: <ActiveLink Type = "mailto" Link = {ad.Email}>{ad.Email }</ActiveLink></div>

             <div className= {window.cLang === 'US'? "ContactPhone US langActive": "ContactPhone US"} onClick={() => onItemClick('Click:Phone&AdId='+ad.idAd)}>Phone: <ActiveLink Type = "tel" Link = {ad.Phone}>{ad.Phone}</ActiveLink></div>
             <div className= {window.cLang === 'RU'? "ContactPhone RU langActive": "ContactPhone RU"} onClick={() => onItemClick('Click:Phone&AdId='+ad.idAd)}>Телефон: <ActiveLink Type = "tel" Link = {ad.Phone}>{ad.Phone}</ActiveLink></div>
             <div className= {window.cLang === 'UZ'? "ContactPhone UZ langActive": "ContactPhone UZ"} onClick={() => onItemClick('Click:Phone&AdId='+ad.idAd)}>Telefon: <ActiveLink Type = "tel" Link = {ad.Phone}>{ad.Phone}</ActiveLink></div>
              
             
              
              <div className= {window.cLang === 'US'? "Country US langActive": "Country US"}>Country: {ad.Country_US}</div>
              <div className= {window.cLang === 'RU'? "Country RU langActive": "Country RU"}>Страна: {ad.Country_RU}</div>
              <div className= {window.cLang === 'UZ'? "Country UZ langActive": "Country UZ"}>Mamlakat: {ad.Country_UZ}</div>


       </div>
        <div className= {window.cLang === 'US'? "compDescp US langActive": "compDescp US"} id = {"compDescp"  + ad.idAd} onClick={() => onItemClick('Click:ReadMore&AdId='+ad.idAd)}><ReadMore>{ad.AdBody_US}</ReadMore></div>
        <div className= {window.cLang === 'RU'? "compDescp RU langActive": "compDescp RU"}  id = {"compDescp"  + ad.idAd} onClick={() => onItemClick('Click:ReadMore&AdId='+ad.idAd)}><ReadMore>{ad.AdBody_RU}</ReadMore></div>
       <div className= {window.cLang === 'UZ'? "compDescp UZ langActive": "compDescp UZ"}  id = {"compDescp"  + ad.idAd} onClick={() => onItemClick('Click:ReadMore&AdId='+ad.idAd)}><ReadMore>{ad.AdBody_UZ}</ReadMore></div> 
       <div className="links"><a href={ad.AttachmentFileList} download onClick={() => onItemClick('Click:Download&AdId='+ad.idAd)}>{ad.AttachmentFileList}</a></div>
    </div>
    ))
    ) 
}
export default AdBuild