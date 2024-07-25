import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const apidata = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const handledata = async () => {
    const response = await fetch(apidata);
    const newdata = await response.json();
    setData(newdata);
  };
  useEffect(() => {
    handledata();
  });
  return (
    <div>
      <ul>
        {data.map((item, index) => {
          return (
            <li>
              {item.id} , {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
