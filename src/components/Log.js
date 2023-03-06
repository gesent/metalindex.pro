import moment from 'moment';
import {useEffect} from 'react'

function Log(DataArr) {
  
  

  useEffect(() => {
    const fetchData = async () => {
      
      var VS = DataArr.split("&");
     // console.log(window.IPv4 + VS[0]);  

  if(window.IPv4 !== "" && VS[0] !== "")
  { 
        var DT =  moment().format("YYYY-MM-DD HH:mm:ss"); 
        var statmentForm = "";
        statmentForm = "VisitorIP="+ window.IPv4 + "&VisitorContry=" + window.country_name + "&VisotrsLangudge=" + window.cLang + "&VisitorAction=" + DataArr + "&DT=" + DT;
        const response = await fetch("http://localhost:3002/api/Log?" + statmentForm);
        const newData = await response.json(); 
        //console.log(statmentForm);  
        console.log(newData);       
    }
    };
  
    fetchData();
  });
  
}

export default Log;