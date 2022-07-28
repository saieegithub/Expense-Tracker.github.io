import React,{useState,useEffect} from 'react';
import './Edit.css';
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom"

const Edit =() =>{
  const { itemID } = useParams();
  const navigate = useNavigate()

   const [title, setTitle] = useState("");
   const [amount, setAmount] = useState();
   const [date, setDate] = useState();
   const[itemData,setItemData]=useState([]);

   

   useEffect(() => {
       axios.get("http://localhost:5000/item")
           .then(async(res) => {
               const rawData = await res.data[0]

               console.log(rawData);

               setItemData(rawData);

               setTitle(rawData.item)
               setAmount(rawData.price)
               // setDate(rawData.date)

           }).catch(err => console.log(err));
   }, [])
   console.log(itemData);


   const submitHandler = (e) => {
       
       e.preventDefault();

       const dataObj = {

           item: title,
           price: amount,
           date: new Date(date)
       }
       axios.put(`http://localhost:5000/item/${itemID}`, dataObj)
   
       alert("Data Updated Successfully");

       navigate("/App")
   }

   return (
       <>
   <div className="formContainer">
           <form onSubmit={submitHandler} >
           <div className='formContainerInner'>
                <div className="title">
                <label><b>Title</b></label>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} required/>
                </div>

                <div className="amount">
                <label><b>Amount</b></label>
                <input type="number" onChange={e => setAmount(e.target.value)} value ={amount} required/>
                </div>
                <div className="date">
                <label><b>Date</b></label>
                <input type="date" onChange={e => setDate(e.target.value)} value = {date}/>
                </div>
                <div className="addExpenses">
                <input type="submit" value="Add Expense" />
                </div>
                </div>
           </form>
        
           </div>
       </>   
   );
};

    

export default Edit;