//import React from 'react'
import AdBuild from './AdBuild'
import '../css/Pagination.css'

const renderData = (data)=>{    
    return( <ul> <AdBuild>{data}</AdBuild> </ul> )
}
  


const Pagination = (props) => {
  const { currentPage, maxPageLimit, minPageLimit} = props;
  const totalPages = Math.trunc((props.response[1][0].Total/25)+0.99);
  const data = props.response[0];

const scrollToTop = () => {
    document.getElementById('Catalog').scroll({
      top: 0,
      behavior: "smooth"
    });
  };
  
    // build page numbers list based on total number of pages
    const pages = [];
    for(let i=1 ; i<=totalPages; i++){
        pages.push(i);
    }

    const handlePrevClick = ()=>{
        props.onPrevClick();
        scrollToTop();
    }

    const handleNextClick = ()=>{
        props.onNextClick();
        scrollToTop();
    }

    const handlePageClick = (e)=>{
        props.onPageChange(Number(e.target.id));
        scrollToTop();
    }

    const pageNumbers = pages.map(page => {

        if(page <= maxPageLimit  && page > minPageLimit) {
            return(
        <li key={page} id={page} onClick={handlePageClick} 
            className={currentPage===page ? 'active' : null}>
            {page}
        </li>
            );
        }else{
            return null;
        }
    }
   
 );

    // page ellipses
    let pageIncrementEllipses = null;
    if(pages.length > maxPageLimit){
        pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>
    }
    let pageDecremenEllipses = null;
    if(minPageLimit >=1){
        pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li> 
    }

    return (
        <div>
            
              {renderData(data)}

            <ul className="pageNumbers"> 
               <li>
                   <button onClick={handlePrevClick} disabled={currentPage === pages[0]}>&#60;</button>
               </li>
               {pageDecremenEllipses}
                {pageNumbers}
               {pageIncrementEllipses}
                <li>
                   <button onClick={handleNextClick} disabled={currentPage === pages[pages.length-1]}>&#62;</button>
               </li>
            </ul>
        </div>
    )
}

export default Pagination