// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import ProductList from "./Components/ProductList";
// import ProductDetail from "./Components/ProductDetail";
// import Dashboard from "./Components/Dashboard";
// import Overview from "./Components/Overview";
// import Profile from "./Components/Profile";
// import Settings from "./Components/Settings";
// import Login from "./Components/Login";
// import { AuthProvider, PrivateRoute, useAuth } from "./AuthContext";

// const Navbar = () => {
//   const { isAuthenticated, logout } = useAuth();

//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/products">Products</Link></li>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//         {isAuthenticated ? (
//           <li><button onClick={logout}>Logout</button></li>
//         ) : (
//           <li><Link to="/login">Login</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/products" element={<ProductList />} />
//           <Route path="/products/:id" element={<ProductDetail />} />
//           <Route path="/login" element={<Login />} />

//           {/* Protected Routes */}
//           <Route
//             path="/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           >
//             <Route path="overview" element={<Overview />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="settings" element={<Settings />} />
//           </Route>
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;


// task6
// import React, { useState, useEffect } from "react";
// import LargeList from "./LargeList";

// const App = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h1>Memoization Example</h1>
//       <p>Counter: {count}</p>
//       <LargeList />
//     </div>
//   );
// };

// export default App;

// task7
// import React, { useState, useMemo, useCallback } from "react";
// import ExpensiveCalculation from "./ExpensiveCalculation";
// import Button from "./Button";

// const App = () => {
//   const [limit, setLimit] = useState(10000);
//   const [count, setCount] = useState(0);


//   const primeNumbers = useMemo(() => {
//     console.log("Calculating primes...");
//     const primes = [];
//     for (let i = 2; i <= limit; i++) {
//       if (isPrime(i)) primes.push(i);
//     }
//     return primes;
//   }, [limit]);


//   const increment = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, []);

//   const decrement = useCallback(() => {
//     setCount((prev) => prev - 1);
//   }, []);

//   const updateLimit = useCallback(() => {
//     setLimit((prev) => prev + 1000);
//   }, []);

//   return (
//     <div>
//       <h1>Optimization with useMemo & useCallback</h1>
//       <p>Counter: {count}</p>
//       <p>Prime Numbers up to {limit}: {primeNumbers.length}</p>

//       <Button onClick={increment}>Increment Counter</Button>
//       <Button onClick={decrement}>decrement Counter</Button>
//       <Button onClick={updateLimit}>Increase Limit</Button>

//       <ExpensiveCalculation primes={primeNumbers} />
//     </div>
//   );
// };

// // Helper function to check if a number is prime
// const isPrime = (num) => {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return num > 1;
// };

// export default App;


// task8
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import ProductList from "./ProductList";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/products">Products</Link></li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/products" element={<ProductList />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// task9
// import React from "react";
// import VirtualizedList from "../../levelnine/VirtualizedList";

// const App = () => {
//   return (
//     <div>
//       <h1>Large List with Virtual Scrolling</h1>
//       <VirtualizedList />
//     </div>
//   );
// };

// export default App;

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";

const Reports = React.lazy(() => import("./Pages/Reports"));
const Settings = React.lazy(() => import("./Pages/Settings"));

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;



