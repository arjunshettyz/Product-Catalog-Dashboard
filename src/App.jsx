import React, { useState, useMemo } from 'react';
import { useProducts } from './hooks/useProducts';
import { ProductList } from './components/ProductList';
import { Pagination } from './components/Pagination';
import { ProductForm } from './components/ProductForm';
import { Header } from './components/Header';

function App() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const ITEMS_PER_PAGE = 8; // Adjust based on grid size

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredProducts]);

  // Reset page when search changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddClick = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleFormSubmit = (data) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, data);
    } else {
      addProduct(data);
    }
  };

  return (
    <div className="min-h-screen pb-10">
      <div className="container">
        <Header
          onSearch={handleSearch}
          onViewChange={setViewMode}
          viewMode={viewMode}
          onAddClick={handleAddClick}
        />

        <div className="mt-8">
          <ProductList
            products={currentProducts}
            viewMode={viewMode}
            onEdit={handleEditClick}
            onDelete={deleteProduct}
          />
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <ProductForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingProduct}
      />
    </div>
  );
}

export default App;
