import { useState ,useEffect} from 'react'
import Header from './components/header'
import Addcontact from './components/Addcontact'
import Contactlist from './components/contactlist'
import { nanoid } from "nanoid";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ContactDetail from './components/contactDetails';
import api from './api/contact'
import EditDetails from './components/EditDeatils'

import './App.css'


function App() {

   const[contacts,setContacts]=useState([])

   


 //  retivecontacts from json server


// setContacts(filtered)
 const retirvecontacts=async ()=>{
  try {
    const response = await api.get("/contacts");
    return response.data;
  } catch (error) {
    console.log("Error fetching contacts", error);
  }
 }

const addcontacts = async (name, email) => {
  const newContact = {
    id: nanoid(),
    name,
    email,
  };

  const response = await api.post("/contacts", newContact);

  // ✅ use response.data
  setContacts(prev => [...prev, response.data]);
};

const updateContacts = async (id,  name,email) => {
  const updatedContact = {
    id,
    name,
    email,
  };

  const response = await api.put(`/contacts/${id}`, updatedContact);

  setContacts((prev) =>
    prev.map((contact) =>
      contact.id === response.data.id ? response.data : contact
    )
  );
};



useEffect(()=>{
//  const retireveitem=JSON.parse(localStorage.getItem('contacts'))
 
// if(retireveitem){
// setContacts(retireveitem)
// }

const getallcontacts=async ()=>{
  const allcontacts=await retirvecontacts();
  console.log("jjjj",allcontacts)
  if(allcontacts){
    setContacts(allcontacts)
  }
}
getallcontacts();

 },[])

 useEffect(()=>{
 //localStorage.setItem("contacts",JSON.stringify(contacts))

 },[contacts])



const remove=async (id)=>{
console.log("jjj")
await api.delete(`/contacts/${id}`)

const filterdata=contacts.filter(item=>item.id!==id)
setContacts(filterdata)
}
 

  return (
    <BrowserRouter>
    <div  className="min-h-screen bg-gray-100">
    <Header/>
    <Routes>
    <Route path="/add" element={<Addcontact handle={addcontacts}/>}></Route>
    <Route  path="/" element={<Contactlist contacts={contacts} onDelete={remove} />}></Route>
    <Route path="*" element={<h1>Page Not Found</h1>} />
    <Route path="/contactdetail" element={<ContactDetail/>} />
    <Route path='/editdetails/:id' element={<EditDetails update={updateContacts} />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
