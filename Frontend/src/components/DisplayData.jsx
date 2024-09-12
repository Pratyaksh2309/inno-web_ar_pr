import React, { useEffect, useState } from "react";

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/get-data/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Fetched Data:', result);  // Debug log
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Submitted Data</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data.length === 0 && !error ? (
        <p>No data available.</p>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <p>Name: {item.name}</p> {/* Directly access name */}
            <p>Email: {item.email}</p> {/* Directly access email */}
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayData;
