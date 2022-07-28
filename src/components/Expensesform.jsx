import React, {useState} from 'react';
import "./Expensesform.css";
import axios from 'axios';

const Expensesform = (props) => {
       const [title, setTitle] = useState("");
       const [amount,setAmount] = useState();
       const [date,setDate] = useState();
       const[formView, setFormView] = useState(false);

    const submitHandler = (e) =>{
        e.preventDefault();
        const dataObj = {
            item : title,
            price :amount,
            date : new Date(date)  //or  date,  //because name of var & property is same

        }

        console.log(dataObj);
        
        axios.post("http://localhost:5000/item", dataObj)
        alert("Data Added Successfully")
        setTitle("");
        setAmount(0);
        setDate(new Date(date));
        setFormView(!formView);
    }
    return(
        < >
            <div className="formContainer">
           <form onSubmit={submitHandler} className={formView == true ?'dBlock':'dNone'}>
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
         
           <button  onClick={() =>setFormView(!formView)} className={formView ? 'dNone':'dBlock'} >
            Add  New Expense</button>
           </div>
          
        </>
    );
}

export default  Expensesform;
