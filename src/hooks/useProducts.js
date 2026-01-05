import { useState, useEffect } from 'react';

const INITIAL_PRODUCTS = [
  { id: 1, name: 'Premium Noise Cancelling Headphones', price: 299, category: 'Electronics', stock: 45, description: 'Experience silence with our top-tier noise cancelling technology.' },
  { id: 2, name: 'Ergonomic Office Chair', price: 199, category: 'Furniture', stock: 12, description: 'Designed for comfort during long working hours.' },
  { id: 3, name: 'Organic Green Tea (50 bags)', price: 15, category: 'Groceries', stock: 100, description: 'Rich antioxidant blend for a refreshing start.' },
  { id: 4, name: '4K Ultra HD Monitor', price: 450, category: 'Electronics', stock: 8, description: 'Crystal clear display for creative professionals.' },
  { id: 5, name: 'Mechanical Keyboard RGB', price: 120, category: 'Electronics', stock: 25, description: 'Tactile feedback with customizable lighting.' },
  { id: 6, name: 'Stainless Steel Water Bottle', price: 25, category: 'Accessories', stock: 60, description: 'Keep your drinks cold for 24 hours.' },
  { id: 7, name: 'Yoga Mat Non-Slip', price: 35, category: 'Fitness', stock: 30, description: 'Perfect grip for all your yoga poses.' },
  { id: 8, name: 'Bluetooth Speaker Waterproof', price: 80, category: 'Electronics', stock: 18, description: 'Take your music anywhere, rain or shine.' },
  { id: 9, name: 'Leather Wallet', price: 50, category: 'Accessories', stock: 40, description: 'Genuine leather with RFID protection.' },
  { id: 10, name: 'Smart Home Hub', price: 150, category: 'Electronics', stock: 15, description: 'Control all your devices from one place.' },
  { id: 11, name: 'Running Shoes', price: 89, category: 'Footwear', stock: 22, description: 'Lightweight and durable usage.' },
  { id: 12, name: 'Coffee Maker Programmable', price: 75, category: 'Appliances', stock: 14, description: 'Wake up to fresh coffee every morning.' },
];

export const useProducts = () => {
  const [products, setProducts] = useState(() => {
    // Try to restore from local storage if strict persistence was needed, 
    // but requirement says "memory only". I'll use memory. 
    // However, fast refresh might reset state, so I'll just init with constants.
    return INITIAL_PRODUCTS;
  });

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(), // Simple ID generation
      price: Number(product.price),
      stock: Number(product.stock),
    };
    setProducts((prev) => [newProduct, ...prev]);
  };

  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields, price: Number(updatedFields.price), stock: Number(updatedFields.stock) } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, addProduct, updateProduct, deleteProduct };
};
