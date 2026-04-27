import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function Contactlist({handle}) {
 const[name,setName]=useState('')
 const[email,setEmail]=useState('')

const navigate =useNavigate()

 const submitform=(e)=>{
    e.preventDefault();
    if(!email || !name){
       alert("fill manadort field")
       return;
    }
handle(name,email)
    
    console.log("form is submit")
    setName('')
    setEmail('')
   navigate ('/')
 }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-200">
  
  <div className="bg-white p-8 rounded-2xl shadow-xl w-[420px]">

    {/* ❌ Removed "Contact Form" heading */}

    <form className="flex flex-col gap-5" onSubmit={submitform}>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button className="bg-blue-500 text-white p-3 rounded-lg">
        Submit
      </button>

    </form>

  </div>

</div>


  )
}

export default Contactlist
