import React from "react";
import Expenses from "./components/Expenses"
import './App.css'
import Expensesform from "./components/Expensesform";


const App = () =>{

    return(
        <>
            <Expensesform />
            <Expenses />
      
        </>
    )
}

export default App;
