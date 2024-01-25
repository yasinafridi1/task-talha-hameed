import React, { useState, useEffect } from "react";

const DummyProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/api/json/1");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dummy Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DummyProducts;
