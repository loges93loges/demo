import React, { useState } from 'react';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: 'laptop', description: 'Description 1' },
    { id: 2, name: 'phone', description: 'Description 2' },
    { id: 3, name: 'desktop', description: 'Description 3' },
    // Add more products as needed
  ];
  
  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="products" >
        {products.map(product => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {cart.find(item => item.id === product.id) ? (
              <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            ) : (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;
