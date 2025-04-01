// import React, { useEffect, useState } from "react";
// import api from "../Services/api";

// function DataFetcher() {
//   const [posts, setPosts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await api.get("/posts");
//         setPosts(response.data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h2>Posts</h2>

//       <div id="loading-indicator" style={{ display: "none", color: "blue" }}>
//         Loading...
//       </div>

//       {error && <p style={{ color: "red" }}>Error: {error}</p>}

//       {!error && posts.length > 0 && (
//         <ul>
//           {posts.slice(0, 5).map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default DataFetcher;
