
import React from 'react';
import { useState } from 'react';

const FilterData = ({data}) => {

    const[search, setsearch] = useState("");

    return ( 
        <>
         <input type="text" placeholder='search...' onChange={(e)=>setsearch(e.target.value)}
                className="form-control"
         />

         <table className='table table-bordered'>
             <thead className='thead-dark bg="black" '>
                 <tr>
                     <th> First Name</th>
                     <th>Last Name</th>
                     <th>Email</th>
                     <th>Gender</th>
                 </tr>
             </thead>
             
             <tbody>
                 {data.filter((val)=>{   // filter function has been used

                     if(search===""){
                         return val;
                     }else if( val.first_name.toLowerCase().includes(search.toLowerCase()) ||
                               val.last_name.toLowerCase().includes(search.toLowerCase())  ||
                               val.gender.toLowerCase().includes(search.toLowerCase())
                               
                     ){
                     
                         return val;
                     }   
                    
                 }).map(obj=>(       // map func start from here
                  <tr key={obj.id}>
                  <td>{obj.first_name}</td>
                  <td>{obj.last_name}</td>
                  <td>{obj.email}</td>
                  <td>{obj.gender}</td>
                  </tr>
                 ))}
                 
             </tbody>
         </table>
        </>
     );
}
 
export default FilterData;