import React, { useEffect, useState } from 'react'
import "./GroceryList.css"

const GroceryList = () => 
{
  const [gList,setGList]=useState([])
  
    useEffect(()=>{
      fetch("http://localhost:3004/grocery")
      .then(res=>res.json())
      .then(data=>setGList(data))
    },[])

  
  
  const loadData=()=>{
    fetch("http://localhost:3004/grocery")
    .then(res=>res.json())
    .then(data=>setGList(data))
  }

  // useEffect(()=>{
  //   fetch("http://localhost:3004/grocery")
  //   .then(res=>res.json())
  //   .then(data=>setGList(data))
  // },[selectedId])


function removeItem(id)
{
   //let d=JSON.stringify(id)
   //setSelectedId(id)

   fetch("http://localhost:3004/grocery/"+id,{
    method:"DELETE",
    headers: {
      'Content-Type': 'application/json',
    }
  }) 

  loadData()

}

// "names": "man",
//       "gender": "df",
//       "department": "dfg",
//       "role": "dfg",
//       "salary": "df",
//       "id": "db8c58f2-e150-408d-a1db-bcaaf9211945"





  return (
    <div>
    <div>
      <button onClick={Show_All_Departments}>Show All Departments</button>
      <button>Show Marketing</button>
      <button>Show HR</button>
      <button>Show IT</button>
      <button>Show Finance</button>
      <button>Show Marketing</button>


    </div>
    {
      gList.map((ele)=>{
        return (<div className='card'>

           <div>Name:{ele.names}</div>
           <div>Gender:{ele.gender}</div>
           <div>Department:{ele.department}</div>
           <div>Role:{ele.role}</div>
           <div>Salary:{ele.salary}</div>

           <button onClick={()=>removeItem(ele.id)}>delete</button>
        </div>)
      }) 
    }
        
    </div>
     
    
  )
}

export default GroceryList