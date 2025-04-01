export function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        const mockData = [
            { id: 1, name: "Alice", age: 25 },
            { id: 2, name: "Bob", age: 30 },
            { id: 3, name: "Charlie", age: 28 }
        ];
        callback(mockData); // Call the callback function with the mock data
    }, 2000); // Simulate a 2-second delay
}
