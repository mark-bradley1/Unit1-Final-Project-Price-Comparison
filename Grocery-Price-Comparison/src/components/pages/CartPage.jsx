import RemoveBtn from "../RemoveBtn";

const CartPage = ({ cart, removeFromCart }) => {
  // Group items by store
  const storeGroups = cart.reduce((groups, item) => {
    if (!groups[item.store]) {
      groups[item.store] = [];
    }
    groups[item.store].push(item);
    return groups;
  }, {});

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {/* Loop through stores */}
      {Object.keys(storeGroups).map((store) => (
        <div key={store} className="store-section">
          {/* Store header */}
          <h2 className="store-title">{store}</h2>

          {/* Item list for this store */}
          {storeGroups[store].map((item) => (
            <div key={item.id} className="cart-card">
              <div className="cart-info">
                {item.name} Price:{" "}
                {item.price ? `$${item.price.toFixed(2)}` : "N/A"}
                <RemoveBtn
                  id="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  className="remove-option-btn"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CartPage;
