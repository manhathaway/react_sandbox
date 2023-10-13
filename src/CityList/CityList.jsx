import './CityList.css';
import { useState } from "react";


const CityList = () => {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Perris"];
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="body">
      <h1 className="heading">List of Cities</h1>
      <div className="content">
        {items.length === 0 && <p>No list found.</p>}
        <div id="CityList-list">
          {items.map((i, index) => (
            <button
              className={
                selectedIndex === index
                  ? "CityList-button CityList-active"
                  : "CityList-button CityList-inactive"
              }
              key={i}
              onMouseEnter={() => setSelectedIndex(index)}
              onMouseLeave={() => setSelectedIndex(null)}
            >
            {i}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityList;
