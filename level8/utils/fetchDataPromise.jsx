// export function fetchDataPromise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const mockData = [
//           { id: 1, name: "Alice" },
//           { id: 2, name: "Bob" },
//           { id: 3, name: "Charlie" }
//         ];
//         resolve(mockData); // Successfully resolve the promise
//       }, 2000);
//     });
//   }
  
export function fetchDataPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
          { id: 3, name: "Charlie" }
        ]);
      }, 2000);
    });
  }
  