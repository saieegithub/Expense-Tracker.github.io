import React from 'react';
import './Dateexpenses.css';

const Dateexpenses = (props) => {

   const newdate =props.row.date;
   const d= new Date(newdate)
    const monthValue = d.toLocaleString("en-us",{month: "long"});
    const date = d.getDate();
    const year = d.getFullYear();
    return(
        <>
        <div className='dateContainer'>
              <h3>{monthValue}</h3>
               <h2>{year}</h2>
               <h4>{date}</h4>
               
        </div>
        </>
    );
}
export default Dateexpenses;