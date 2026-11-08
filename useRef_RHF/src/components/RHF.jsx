
//isme required mixture hai onchange,name,required, 
// RHF internally useRef use krta hai aur useRef render pr trigger nhi hota hai 
// elelment ke reference pr chalta hai rendering trigger nhi krta hai 


import { useForm } from 'react-hook-form';

function RHF() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

console.log("rendering...")

const formSubmit =(data)=>{
    console.log(data)
    reset();
}

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col justify-center items-center gap-7 m-8" >
        <input {...register("name")} className="bg-blue-400 rounded p-4" type="text" placeholder='enter your name' />
         <input {...register("price")} className="bg-blue-400 rounded p-4" type="text" placeholder='enter price' />
         <span>Category :</span>
         <select {...register("category")} className="bg-blue-400 rounded p-4" name="" id="">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
         </select>
         <button className="bg-yellow-400 rounded p-4">Submit</button>
    </form>
  );
}

export default RHF