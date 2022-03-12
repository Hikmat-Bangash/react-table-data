
import React from 'react';
import data from "./MOCK_DATA.json"
import FilterData from './FilterTableData';

const MainFile = () => {  

    return (
     <div className="container">
         <FilterData data = {data}/>
    </div>
      );
}
 
export default MainFile;