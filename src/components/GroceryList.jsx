import React, { useEffect, useState } from 'react'
import "./GroceryList.css"

const GroceryList = () => 
{
  const [gList,setGList]=useState([])
  //const [selectedId,setSelectedId]=useState()

  //useEffect(()=>{

    

    useEffect(()=>{
      fetch("http://localhost:3004/grocery")
      .then(res=>res.json())
      .then(data=>setGList(data))
    },[])


 // },[])

  
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

  return (
    <>
    {
      gList.map((ele)=>{
        return (<div className='card'>
          <div>Name:{ele.title}</div>
           <button onClick={()=>removeItem(ele.id)}>delete</button>
        </div>)
      }) 
    }
        
    </>
     
    
  )
}

export default GroceryList