// import React, { useEffect } from "react";
// import { fetchDataPromise } from "../utils/fetchDataPromise";

// const DataFetcher = () => {
//   useEffect(() => {
//     fetchDataPromise()
//       .then((data) => {
//         console.log("Fetched Data using Promise:", data);
//       }) // Handle successful response
//       .catch((error) => console.error("Error fetching data:", error)); // Handle errors
//   }, []);

//   return (
//     <div>
//       <h2>Fetching Data with Promises...</h2>
//       <p>Check the console after 2 seconds for the fetched data.</p>
//     </div>
//   );
// };

// export default DataFetcher;


import React, { useEffect } from "react";
import { fetchDataAsync } from "../utils/fetchDataAsync";

const DataFetcher = () => {
  useEffect(() => {
    fetchDataAsync();
  }, []);

  return (
    <div>
      <h2>Fetching Data with Async/Await...</h2>
      <p>Check the console after 2 seconds.</p>
    </div>
  );
};

export default DataFetcher;
