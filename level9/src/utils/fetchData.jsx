export const fetchData = async (url) => {
    const cachedData = localStorage.getItem(url);
    if (cachedData) return JSON.parse(cachedData);
  
    const response = await fetch(url);
    const data = await response.json();
    localStorage.setItem(url, JSON.stringify(data));
    return data;
  };
  