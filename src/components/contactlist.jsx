import { useState } from 'react'
import { FaUserCircle, FaTrash ,FaEdit} from "react-icons/fa";
import { useNavigate ,Link} from 'react-router-dom';



// function Contactlist({contacts,onDelete}) {
//     console.log(contacts)
//     const navigate=useNavigate()
//     const [searchTerm,setSearchTerm]=useState('')

// const filtered=contacts.filter((contact)=>{
// contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||contact.email.toLowerCase().includes(searchTerm.toLowerCase())

// })
    
 
//   return (
//  <div className="bg-white p-6 rounded-xl shadow-md w-[400px]">

//   {/* Header Row */}
//   <div className="flex items-center justify-between mb-4">
//     <h2 className="text-lg font-semibold">Contact List</h2>

//     <button onClick={() => navigate("/add")} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
//       Add Contact
//     </button>
//   </div>
//  <input
//         type="text"
//         placeholder="Search by name or email..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//       />


//   {contacts.length === 0 ? (
//     <p className="text-gray-500">No contacts found</p>
//   ) : (
//     contacts.map((item) => (
//       <div
//         key={item.id}
//         className="flex items-center justify-between border-b py-3"
//       >
//         {/* Left Side */}
//         <div className="flex items-center gap-3">
//           <FaUserCircle className="text-2xl text-gray-500" />
//            <Link to='/contactdetail' state={item}>
//           <div>
//             <p className="font-medium">{item.name}</p>
//             <p className="text-sm text-gray-500">{item.email}</p>
//           </div>
//           </Link>
//          </div>
//            {/* edit */}
//          <Link to={`/editdetails/${item.id}`} state={item}>
//             <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700" />
//           </Link>


//         {/* Right Side */}
//         <FaTrash
//           onClick={() => onDelete(item.id)}
//           className="text-red-500 cursor-pointer hover:text-red-700"
//         />
//       </div>
//     ))
//   )}

// </div>
//   )
// }


function Contactlist({ contacts, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
const navigate=useNavigate()
  // 🔍 Filter contacts
  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-[400px]">

      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Contact List</h2>

        <button
          onClick={() => navigate("/add")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
        >
          Add Contact
        </button>
      </div>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {filteredContacts.length === 0 ? (
        <p className="text-gray-500">No contacts found</p>
      ) : (
        filteredContacts.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-3"
          >
            {/* Left Side */}
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-2xl text-gray-500" />

              <Link to="/contactdetail" state={item}>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.email}</p>
                </div>
              </Link>
            </div>

            {/* Edit */}
            <Link to={`/editdetails/${item.id}`} state={item}>
              <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700" />
            </Link>

            {/* Delete */}
            <FaTrash
              onClick={() => onDelete(item.id)}
              className="text-red-500 cursor-pointer hover:text-red-700"
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Contactlist
