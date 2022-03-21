import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./GroceryList.css"
import GroceryList from "./GroceryList"


const GroceryInput = () => {

const [Name,setName]=useState()
const [Gender,setGender]=useState()
const [Department,setDepartment]=useState()
const [Role,setRole]=useState()
const [Salary,setSalary]=useState()
const [ochnage,setOChnage]=useState()
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

    setOChnage(obj)

    
}

function AddToList()
{
    let obj={
      names:Name,
      gender:Gender,
      department:Department,
      role:Role,
      salary:Salary,
      id:uuidv4()
    }
 
      AddToDb(obj)


}

  return (
    <>
    <div className='maindiv'>
      <input type="text" name="" id="" placeholder='Name'
       value={Name} onChange={(e)=>setName(e.target.value)}/>

        <input type="text" name="" id="" placeholder='Gender'
        value={Gender} onChange={(e)=>setGender(e.target.value)}/>

        <input type="text" name="" id="" placeholder='Department'
        value={Department} onChange={(e)=>setDepartment(e.target.value)}/>

        <input type="text" name="" id="" placeholder='Role'
        value={Role} onChange={(e)=>setRole(e.target.value)}/>

        <input type="text" name="" id="" placeholder='Salary'
        value={Salary} onChange={(e)=>setSalary(e.target.value)}/>
      <button onClick={AddToList}>Add</button>
    </div>

    <div>
      {
         <GroceryList />
      
      }
       
    </div>

    </>
   

    



  )
}

export default GroceryInput