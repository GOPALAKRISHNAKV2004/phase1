import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Global loading state
let activeRequests = 0;
const updateLoading = (isLoading) => {
  const loadingElement = document.getElementById("loading-indicator");
  if (loadingElement) {
    loadingElement.style.display = isLoading ? "block" : "none";
  }
};

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    activeRequests++;
    updateLoading(true); // Show loading indicator

    // Add Authorization header
    config.headers.Authorization = "Bearer my-secret-token";
    return config;
  },
  (error) => {
    activeRequests--;
    updateLoading(activeRequests > 0);
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    activeRequests--;
    updateLoading(activeRequests > 0);
    console.log("Response:", response.data);
    return response;
  },
  (error) => {
    activeRequests--;
    updateLoading(activeRequests > 0);

    // Handle common errors
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error("Unauthorized: Please log in.");
          alert("Unauthorized access!");
          break;
        case 404:
          console.error("Not Found: The requested resource is missing.");
          alert("Requested data not found.");
          break;
        case 500:
          console.error("Server Error: Try again later.");
          alert("Internal server error. Please try again.");
          break;
        default:
          console.error("An error occurred.");
      }
    }
    return Promise.reject(error);
  }
);

export default api;
