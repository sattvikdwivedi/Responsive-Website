// import { useEffect, useState } from "react";
// import React  from 'react';

//  const Statewise = () => {
//     const[cont, setcont] = useState([]);
//     const getCovidData = async () =>{
//         const res= await fetch('https://data.covid19india.org/data.json');
//         const actual =  await res.json();
//         console.log(actual.statewise);
//         setcont(actual.statewise);
//      }
//      useEffect(() => {
//       getCovidData();
//      }, []);
     
//   return (
//     <>
//     <div className="container-fluid mt-5  ">
//         <div className="main-heading">
//             <h1 className="mb-5 text-center"> <span className="font-weight-bold"> INDIA </span>Covid-19 Statewise Dashboard</h1>
//         </div>
//         <div className="table-responsive">
//             <table className="table table-hover"> 
//             <thead className="table-dark">
//                 <tr>
//                     <td>State</td>
//                     <td> Confirmed</td>
//                     <td> recovered</td>
//                     <td> deaths</td>
//                     <td> active</td>
//                     <td> updated</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     cont.map((current,index)=>{
//                         return(
//                         <tr key={index}>
//                     <td>{current.state}</td>
//                     <td> {current.confirmed}</td>
//                     <td> {current.recovered}</td>
//                     <td> {current.deaths}</td>
//                     <td> {current.active}</td>
//                     <td> {current.lastupdatedtime}</td>
//                 </tr>);
//                     })
//                 }
            
//             </tbody>
//             </table>
//         </div>
//     </div>
//     </>  
//   )
// };
// export default Statewise;