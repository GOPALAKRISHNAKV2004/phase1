import { fetchDataPromise } from "./fetchDataPromise";

export async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log("Fetched Data (Async/Await):", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
