import React,{useState} from 'react';
import'./Filter.css';

const Filter = (props) => {

    const [filteredYear, setFilteredYear] = useState("All");

    const selectedYear = (e) =>{
        setFilteredYear(e.target.value)
        
    }
   

    props.filteredValue(filteredYear);

    return(
        <>
        <div className='dropdownYear'>
            <div className= 'dropdownTitle'>Filter by year</div>
             <select className='dropdownSelect' onChange={selectedYear}>
                <option value="All">All</option>
                <option  value="2018">2018</option>
                <option  value="2019">2019</option>
                <option  value="2020">2020</option>
                <option  value="2021">2021</option>
                <option  value="2022">2022</option>              
             </select>
        </div>
        </>
    );
};

export default Filter;