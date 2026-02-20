import React, { useEffect, useState } from 'react'

function Useeffect_api() {
    const [user, setuser] = useState([])

    useEffect(async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users') //axios
        const jres = await data.json()
        console.log(jres)
        setuser(jres)
        // .then(response => console.log("hello",typeof response)) // Parse the response body as JSON
        // .then(data => console.log(data))   // Handle the data
        // .catch(error => console.error('Error fetching data:', error)); // Handle network errors
    }, [])
    return (
        <div>
          <div className='text-4xl font-bold font-serif text-center p-5 text-white bg-black'>User Data</div>
          <div className='grid grid-cols-5 border-2 border-gray-200 p-3 m-5 text-2xl font-bold font-serif'>
            <div>Sr No</div>
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Website</div>
          </div>
            {user.map((value) => {
                return (
                <>
                <div className='grid grid-cols-5 border-2 border-gray-200 p-2 mx-5 my-2 text-lg font-serif'>
                  <div>{value.id}</div>
                  <div>{value.name}</div>
                  <div>{value.email}</div>
                  <div>{value.phone}</div>
                  <div>{value.website}</div>
                </div>
                </>
                )
            })}
        </div>
    )
}

export default Useeffect_api













// import React, { useEffect, useState } from "react";

// function Useeffect_api() {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     id: null,
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();
//       setUsers(data);
//     };
//     fetchUsers();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     const newUser = { ...formData, id: Date.now() };
//     setUsers([...users, newUser]);
//     setFormData({ id: null, name: "", email: "", phone: "" });
//   };

//   const handleEdit = (user) => {
//     setFormData(user);
//     setIsEditing(true);
//   };

//   const handleUpdate = () => {
//     const updated = users.map((u) =>
//       u.id === formData.id ? formData : u
//     );
//     setUsers(updated);
//     setIsEditing(false);
//     setFormData({ id: null, name: "", email: "", phone: "" });
//   };

//   const handleDelete = (id) => {
//     setUsers(users.filter((u) => u.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* PREMIUM HEADER */}
//       <header className="bg-white sticky top-0 z-50 shadow-md border-b">
//         <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

//           <div className="flex items-center gap-3">
//             <div className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-xl font-bold text-lg">
//               U
//             </div>
//             <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
//               User Management
//             </h1>
//           </div>

//           <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
//             <span className="hover:text-black cursor-pointer">Dashboard</span>
//             <span className="hover:text-black cursor-pointer">Users</span>
//             <span className="hover:text-black cursor-pointer">Reports</span>
//           </nav>

//           <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition shadow-lg hover:shadow-xl">
//             Admin
//           </button>
//         </div>

//         <div className="h-1 bg-black w-full"></div>
//       </header>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-8 py-12">

//         {/* FORM CARD */}
//         <div className="bg-white rounded-3xl shadow-2xl p-10 mb-12 border border-gray-100">
//           <h2 className="text-2xl font-semibold mb-10 text-gray-800">
//             {isEditing ? "Edit User Information" : "Create New User"}
//           </h2>

//           <div className="grid md:grid-cols-3 gap-10">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Full Name"
//               className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-3"
//             />

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email Address"
//               className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-3"
//             />

//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-3"
//             />
//           </div>

//           <div className="mt-12 text-right">
//             {isEditing ? (
//               <button
//                 onClick={handleUpdate}
//                 className="bg-black text-white px-12 py-3 rounded-full hover:scale-105 transition shadow-lg"
//               >
//                 Update User
//               </button>
//             ) : (
//               <button
//                 onClick={handleAdd}
//                 className="bg-black text-white px-12 py-3 rounded-full hover:scale-105 transition shadow-lg"
//               >
//                 Create User
//               </button>
//             )}
//           </div>
//         </div>

//         {/* TABLE CARD */}
//         <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
//           <h2 className="text-xl font-semibold mb-8 text-gray-800">
//             All Users
//           </h2>

//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="border-b text-gray-500 uppercase text-sm">
//                 <tr>
//                   <th className="pb-5">Name</th>
//                   <th className="pb-5">Email</th>
//                   <th className="pb-5">Phone</th>
//                   <th className="pb-5 text-center">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {users.map((user) => (
//                   <tr
//                     key={user.id}
//                     className="border-b hover:bg-gray-50 transition"
//                   >
//                     <td className="py-5 font-medium">{user.name}</td>
//                     <td className="py-5">{user.email}</td>
//                     <td className="py-5">{user.phone}</td>
//                     <td className="py-5 text-center space-x-6">
//                       <button
//                         onClick={() => handleEdit(user)}
//                         className="text-gray-700 hover:text-black transition font-medium"
//                       >
//                         ✏ Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(user.id)}
//                         className="text-gray-400 hover:text-red-600 transition font-medium"
//                       >
//                         🗑 Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Useeffect_api
