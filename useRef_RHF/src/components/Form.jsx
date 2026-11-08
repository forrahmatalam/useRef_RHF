import React from 'react'
import { useState , useRef} from 'react'

const Form = () => {

// const [formData, setFormData] = useState({})
//useref ek hook hota hai jo aapke kisi bhi element ka reference store krta hai 
const formRef =useRef({})

console.log("App rendering......")

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formRef.current.productName.value)
   console.log(formRef.current.price.value)
    console.log(formRef.current.category.value)
     console.log(formRef.current.image.value)
}

return (
    <div>
      <form 
      onSubmit ={handleSubmit}  className='flex flex-col gap-10 justify-center items-center '>
        <input 
        ref={(e)=>(formRef.current.productName=e)}
        // onChange={(e)=>setFormData({...formData ,productName:e.target.value})}
        className='bg-red-400 text-bold p-4 rounded-[10px]' type="text" placeholder='Product Name' />
        <input 
        ref={(e)=>(formRef.current.price=e)}
        // onChange={(e)=>setFormData({...formData ,price:e.target.value})}
        className='bg-red-400 text-bold p-4 rounded-[10px]' type="text" placeholder='Price'/>
        <span className='text-gray-400'>Select Category :</span>
        <select 
        ref={(e)=>(formRef.current.category=e)}
        // onChange={(e)=>setFormData({...formData ,Category:e.target.value})}
        placeholder='Select a category' className='bg-red-400 text-bold p-4 rounded-[10px]'>
          <option value="Mens">Mens</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
        <input 
        ref={(e)=>(formRef.current.image=e)}
        // onChange={(e)=>setFormData({...formData ,Image:e.target.files[0]})}
        type="file" className='bg-red-400 text-bold p-4 rounded-[10px]' placeholder='Image' />
        <button className='bg-blue-400  w-50 text-bold p-4 rounded-[10px]'>Create</button>
      </form>
    </div>
  )
}

export default Form