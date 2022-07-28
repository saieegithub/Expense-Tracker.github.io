import React, {useState,useEffect} from "react";
import Dateexpenses from './Dateexpenses';
import './Expenses.css';
import Filter from './Filter';
import Chart from './Chart';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Expenses = (props) => {
    const [updatedYear, setUpDatedYear] = useState();
     const navigate = useNavigate(); 
    const[itemData,setItemData] = useState([]);
     useEffect(()=>{
            axios.get("http://localhost:5000/item")
             .then(async(res)=>{
              const rawData =await res.data;
              console.log(rawData);
              setItemData(rawData);
            }).catch(err=>console.log(err));
           },[]);

           console.log(itemData);

const filteredValue = (filteredYear) =>{
   setUpDatedYear(filteredYear);
}

        let filterRecord = itemData.filter (row =>{
            const newdate =row.date;
            const d= new Date(newdate);
            if(updatedYear == "All"){
                return(row)
            }
            else{
                return(
                    d.getFullYear() == updatedYear
                )
            }
         });

         const delData = (_id) => {
            axios.delete(`http://localhost:5000/item/${_id}`)
            alert("Data  deleted");
    
            const filteredData = itemData.filter((row) => {
                return (
                    row._id !== _id
                )
            })
            setItemData(filteredData);
    
        }
        
    return(
        <>
        <div className="mainVessel">
          <Filter filteredValue = {filteredValue}/>
          <Chart filterRecord = {filterRecord}/> 

         {
      filterRecord.map(row =>{
                return(
                    <div className="expenseListMain">
                   <div className="expenseList">
                     <div>
                           < Dateexpenses row = {row}/>
                     </div>
                   <div className="item">
                        <h3>{row.item}</h3>
                    </div>
                     <div className="price">
                       <h2> $ {row.price}</h2>  
                     </div>
                     <div>
                     <button onClick = {() => navigate(`/edit/${row._id}`)} type="edit" className="edit">Edit</button>

                     <button onClick={() => delData(row._id)} type="delete" className="delete">Delete</button>
                     </div>
                     </div> 
             </div>
                );
      })
        }
         </div>
        </>
       
 );
    }
export default Expenses;

