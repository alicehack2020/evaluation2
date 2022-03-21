import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const GroceryInput = () => {
const [value,setValue]=useState()



const AddToDb=(obj)=>
{
  var data1=JSON.stringify(obj)
    fetch(`http://localhost:3004/grocery`,{
      method:"POST",
      body:data1,
      headers: {
        'Content-Type': 'application/json',
      }
    })
}

function AddToList()
{
    let obj={
      title:value,
      id:uuidv4()
      }
 
      AddToDb(obj)

}

  return (
    <div>
      <input type="text" name="" id="" placeholder='Enter Grocery Name'
       value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={AddToList}>Add</button>
    </div>
  )
}

export default GroceryInput