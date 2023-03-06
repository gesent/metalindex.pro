import React, { useState, useEffect } from "react";
import Pagination from './Pagination';
import Log from './Log'
import '../css/SearchBar.css'

const Catalog = () => {

      const pageNumberLimit = 25;
      const [AdData, setAdData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [currentPage, setCurrentPage] = useState(1);
      const [maxPageLimit, setMaxPageLimit] = useState(10);
      const [minPageLimit, setMinPageLimit] = useState(0);
      const [SearchInput, setSearchInput] = useState("");
      const [Search, setSearch] = useState("");
      const [DataArr, setDataArr] = useState("Open Catalog");
        
      const handleSubmit = (e) => {
         
         
         if(e.type === 'submit' || e.key === 'Enter')
          {
            var val = document.getElementById("SearchField").value;
            e.preventDefault(); 
            setSearch(val);
            setDataArr("Search:" + val);
          }

       }
      if(DataArr){Log(DataArr);}
      
      
      useEffect(()=>{
        fetch("http://localhost:3002/api/Catalog?page=" + ((currentPage - 1)*25)+ "&search=" + Search)
        .then((response)=>{response.json()
        .then((json) => { setAdData(json); setLoading(false);}); 
        window.DisplayArray = [0];
        });
        },[currentPage, Search])
  
         const onPageChange= (pageNumber)=>{
          setCurrentPage(pageNumber);
        }

        const onPrevClick = ()=>{
            if((currentPage-1) % pageNumberLimit === 0){
                setMaxPageLimit(maxPageLimit - pageNumberLimit);
                setMinPageLimit(minPageLimit - pageNumberLimit);
            }
            setCurrentPage(prev=> prev-1);
         }
        
        const onNextClick = ()=>{
             if(currentPage+1 > maxPageLimit){
                 setMaxPageLimit(maxPageLimit + pageNumberLimit);
                 setMinPageLimit(minPageLimit + pageNumberLimit);
             }
             setCurrentPage(prev=>prev+1);
          }

        const paginationAttributes = {
          currentPage,
          maxPageLimit,
          minPageLimit,
          response: AdData,
        };

       document.addEventListener('keydown', handleSubmit);
               
       return ( <>

        <div className="SearchBar" id = "SearchBarWrap">
  <form id="SearchBar" onSubmit={handleSubmit}>
  <input
    id = "SearchField" 
    type="imput"
   // onChange={handleChange}
   onChange={event => setSearchInput(event.target.value)}
   defaultValue = {SearchInput}
   placeholder= "Search"
   //value={SearchInput} 
   />
   
   <input 
    id="search_submit" 
    value="" 
    type="submit"/>
</form>
</div>
       <div className='Catalog' id = 'Catalog'>
          {!loading ? <Pagination {...paginationAttributes} 
                          onPrevClick={onPrevClick} 
                          onNextClick={onNextClick}
                          onPageChange={onPageChange}/>: <div> Loading... </div>
          }
        </div></>
      )
   }


export default Catalog