import Dropdown from "../Dropdown";
import React, { useState, useEffect } from "react";
import groceryItems from "../data/groceryItems.json";
import Button from "../Button";
import RemoveBtn from "../RemoveBtn";

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

    // const filtered = groceryItems.filter((item) =>
    //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    const filtered = groceryItems.filter((item) => {
      const itemName = item.name.toLowerCase();
      const term = searchTerm.toLowerCase();

      
      const regex = new RegExp(`\\b${term}`, "i");
      return regex.test(itemName);
    });

    setFilteredItems(filtered);
  };

  return (
    <div>
      <h1 id="comp-page">Comparison Tool</h1>

      <h4>Select stores to compare: </h4>
      <Dropdown stores={storeNames} onSelect={handleAddStore} />
      {selectedStores.length > 0 && (
        <div>
          <h3>Comparing: </h3>
          {selectedStores.map((store) => (
            <span key={store} className="store-option">
              {store}{" "}
              <RemoveBtn
                id="remove-btn"
                onClick={() => handleRemoveStore(store)}
                className="remove-store-btn"
              />
            </span>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search-box"
          type="text"
          placeholder="Search for an item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" label="Search" className="search-btn" />
      </form>
      {submittedTerm && filteredItems.length > 0 && (
        <div className="results-container">
          <h3>
            Showing results for "<em>{submittedTerm}</em>"
          </h3>
          {filteredItems.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-image-container">
                <img src={item.image} alt={item.name} className="item-image" />
              </div>
              <div className="item-info">
                <h4 className="item-name">{item.name}</h4>
                {selectedStores.map((store) => (
                  <div key={store} className="store-row">
                    <span className="store-name">{store}:</span>
                    <span className="price">
                      {item[store] ? (
                        `$${item[store].toFixed(2)}`
                      ) : (
                        <em>N/A</em>
                      )}
                    </span>
                    <Button
                      label="Add to Cart"
                      className="add-to-cart-btn"
                      onClick={() =>
                        alert(`Added ${item.name} from ${store} to cart!`)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {submittedTerm && filteredItems.length === 0 && (
        <p>
          No items found for "<em>{submittedTerm}</em>"
        </p>
      )}
    </div>
  );
};

export default ComparisonPage;
