// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function App() {

//   const[data,setData] = useState([])

//   useEffect(()=>{
//     axios.post('https://reqres.in/api/users',{
//       "name":"sai",
//       "job":"developer"
//     },)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
//   }, [])

//   return (
//     <div>
//       <h2>Axios library in react js</h2>
//       {/* {
//         data.map((d,i) =>{
//           return <p key={i}>{d.email}</p>
//         })
//       } */}
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = useState([]); // State for storing data
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true); // Start loading
//         const response = await axios.get("https://reqres.in/api/users?page=2");
//         setData(response.data.data); // Set data from API
//       } catch (err) {
//         setError("Failed to fetch data"); // Handle error
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchData(); // Call the async function
//   }, []);

//   return (
//     <div>
//       <h2>Axios with Async/Await</h2>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {!loading && !error && data.length > 0 && (
//         <ul>
//           {data.map((user) => (
//             <li key={user.id}>{user.email}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;
