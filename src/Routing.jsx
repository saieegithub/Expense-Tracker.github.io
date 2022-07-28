import React from 'react';
import{Routes,Route} from 'react-router-dom';
import Edit from './components/Edit';
import App from './App';
const Routing = () =>{

     return(
        <>
        <Routes>
            <Route exact path="/" element={<App/>}/>

            <Route exact path="/App" element={<App/>}/>

            <Route exact path= "/edit/:itemID" element={<Edit/>}/>

        
        </Routes>
        
        </>
     );

};

export default Routing;