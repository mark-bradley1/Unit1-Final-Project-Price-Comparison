import Dropdown from "../Dropdown";
import React, { useState, useEffect } from "react";
import groceryItems from "../data/groceryItems.json";

const ComparisonPage = () => {
  const [selectedStores, setSelectedStores] = useState([]);
  const [storeNames, setStoreNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedTerm, setSubmittedTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const firstItem = groceryItems[0];
    const storeKeys = Object.keys(firstItem).filter(
      (key) => !["id", "name", "category", "image"].includes(key)
    );
    setStoreNames(storeKeys);
  }, []);

  const handleAddStore = (store) => {
    if (!selectedStores.includes(store)) {
      setSelectedStores((prev) => [...prev, store]);
    }
  };

  const handleRemoveStore = (store) => {
    setSelectedStores((prev) => prev.filter((s) => s !== store));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === "" || selectedStores.length === 0) {
      alert("Please select at least one store and enter an item to search.");
      return;
    }

    setSubmittedTerm(searchTerm);

    const filtered = groceryItems.filter((item) => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setFilteredItems(filtered);
  }

  return (
    <div>
      <h2>Comparison Page</h2>

      <h4>Select stores to compare: </h4>
      <Dropdown stores={storeNames} onSelect={handleAddStore} />
      {selectedStores.length > 0 && (
        <div>
          <h3>Comparing: </h3>
          {selectedStores.map((store) => (
            <span key={store}>
              {store}{" "}
              <button onClick={() => handleRemoveStore(store)}>X</button>
            </span>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Search for an item..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
        type="submit"
        >Search</button>
      </form>
      {submittedTerm && filteredItems.length > 0 && (
        <div>
        <h3>Showing results for "<em>{submittedTerm}</em>"</h3>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              {selectedStores.map((store) => (
                <th
                key={store}
                >{store}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                src={item.image}
                alt={item.name}
                width="100"
                height="100"
                />
                {item.name}
              </td>
              {selectedStores.map((store) => (
                <td key={store}>
                  {item[store] ? `$${item[store].toFixed(2)}` : <em>N/A</em>}
                </td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
      {submittedTerm && filteredItems.length === 0 && (
        <p>No items found for "<em>{submittedTerm}</em></p>
      )}
    </div>
  );
};

export default ComparisonPage;