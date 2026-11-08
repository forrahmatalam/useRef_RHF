import React from 'react'
import { useState } from 'react'

const Form = () => {

const [formData, setFormData] = useState({})

console.log("App rendering......")

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(formData)
}

return (
    <div>
      <form 
      onSubmit ={handleSubmit}  className='flex flex-col gap-10 justify-center items-center '>
        <input 
        onChange={(e)=>setFormData({...formData ,productName:e.target.value})}
        className='bg-red-400 text-bold p-4 rounded-[10px]' type="text" placeholder='Product Name' />
        <input 
        onChange={(e)=>setFormData({...formData ,price:e.target.value})}
        className='bg-red-400 text-bold p-4 rounded-[10px]' type="text" placeholder='Price'/>
        <span className='text-gray-400'>Select Category :</span>
        <select 
        onChange={(e)=>setFormData({...formData ,Category:e.target.value})}
        placeholder='Select a category' className='bg-red-400 text-bold p-4 rounded-[10px]'>
          <option value="Mens">Mens</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
        <input onChange={(e)=>setFormData({...formData ,Image:e.target.files[0]})} type="file" className='bg-red-400 text-bold p-4 rounded-[10px]' placeholder='Image' />
        <button className='bg-blue-400  w-50 text-bold p-4 rounded-[10px]'>Create</button>
      </form>
    </div>
  )
}

export default Form