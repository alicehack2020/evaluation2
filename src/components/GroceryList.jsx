import React, { useEffect, useState } from 'react'
import "./GroceryList.css"

const GroceryList = (probs) => 
{
  const [gList,setGList]=useState([])
  let x=probs.data;
    
  
  useEffect(()=>{
      fetch("http://localhost:3004/grocery")
      .then(res=>res.json())
      .then(data=>setGList(data))
    },[x])

  
  
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
const Show_All_Departments=()=>
{

}

const Ascending=()=>{
     gList.sort(dynamicsort("salary","desc"))
     console.log(gList);
}



function dynamicsort(property,order) {
  var sort_order = 1;
  if(order === "desc"){
      sort_order = -1;
  }
  return function (a, b){
      // a should come before b in the sorted order
      if(a[property] < b[property]){
              return -1 * sort_order;
      // a should come after b in the sorted order
      }else if(a[property] > b[property]){
              return 1 * sort_order;
      // a and b are the same
      }else{
              return 0 * sort_order;
      }
  }
}

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
   
   <div>
    <button onClick={Ascending}>Sort By Salary Ascending</button>

      <button>Sort By Salary Descending</button>
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