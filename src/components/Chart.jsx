import React from 'react';
import Chartlist from './Chartlist';
import'./Chart.css';

const Chart = (props) => {
      
      let chartDataPoints = [
        {label: "Jan", price: 0},
        {label: "Feb", price: 0},
        {label: "Mar", price: 0},
        {label: "Apr", price: 0},
        {label: "May", price: 0},
        {label: "Jun", price: 0},
        {label: "Jul", price: 0},
        {label: "Aug", price: 0},
        {label: "Sep", price: 0},
        {label: "Oct", price: 0},
        {label: "Nov", price: 0},
        {label: "Dec", price: 0}
      ];
    
      for(let record of props.filterRecord){
        const newdate = record.date;
        const d =new Date(newdate);
        let month = d.getMonth();
        chartDataPoints [month].price = record.price;
      }

      let priceArray = props.filterRecord.map(row => row.price);
       let maxPrice = Math.max(...priceArray);
      //  console.log(maxPrice);
    return(
        <div className='dFlex'>

            {
                chartDataPoints.map(record =>{
                      return(
                        <Chartlist label = {record.label} value ={record.price} maxPrice = {maxPrice}/>
                      )
                })
            }
              
        </div>
    );
};

export default Chart;



