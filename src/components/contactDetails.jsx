import { useState } from 'react'

import { FaUserCircle } from "react-icons/fa";
import { Link ,useLocation } from 'react-router-dom';

function ContactDetail() {

const location=useLocation();
const contact=location.state;
console.log(contact)
 return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-[350px] text-center">

        {/* Profile Image */}
        <FaUserCircle className="text-6xl text-gray-500 mx-auto mb-4" />

        {/* Name */}
        <h2 className="text-xl font-semibold">
          {contact?.name}
        </h2>

        {/* Email */}
        <p className="text-gray-500 mt-2">
         {contact?.email}
        </p>
   <Link to='/'>
     <button  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
      Back to Contact Page
    </button>
     </Link>

      </div>

    </div>
  );
}

export default ContactDetail
