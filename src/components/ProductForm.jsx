import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const ProductForm = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: '',
        stock: '',
        description: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
                price: initialData.price.toString(),
                stock: initialData.stock.toString(),
            });
        } else {
            setFormData({ name: '', price: '', category: '', stock: '', description: '' });
        }
        setErrors({});
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Product name is required';
        if (!formData.price) newErrors.price = 'Price is required';
        else if (isNaN(Number(formData.price)) || Number(formData.price) < 0) newErrors.price = 'Price must be a valid positive number';
        if (!formData.category.trim()) newErrors.category = 'Category is required';
        if (formData.stock && (isNaN(Number(formData.stock)) || Number(formData.stock) < 0)) newErrors.stock = 'Stock must be a valid non-negative number';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit({
                ...formData,
                price: Number(formData.price),
                stock: Number(formData.stock) || 0,
            });
            onClose();
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content fade-in">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">{initialData ? 'Edit Product' : 'Add New Product'}</h2>
                    <button onClick={onClose} className="close-btn" aria-label="Close Modal">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Product Name *</label>
                        <input
                            type="text"
                            className="input"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g., Wireless Headphones"
                        />
                        {errors.name && <p className="error-msg">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group">
                            <label className="form-label">Price (₹) *</label>
                            <input
                                type="number"
                                step="0.01"
                                className="input"
                                value={formData.price}
                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                placeholder="0.00"
                            />
                            {errors.price && <p className="error-msg">{errors.price}</p>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Stock</label>
                            <input
                                type="number"
                                className="input"
                                value={formData.stock}
                                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                                placeholder="0"
                            />
                            {errors.stock && <p className="error-msg">{errors.stock}</p>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Category *</label>
                        <select
                            className="input"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            <option value="">Select Category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Groceries">Groceries</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Fitness">Fitness</option>
                            <option value="Footwear">Footwear</option>
                            <option value="Appliances">Appliances</option>
                        </select>
                        {errors.category && <p className="error-msg">{errors.category}</p>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                            className="input"
                            rows="3"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Product description..."
                        />
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                        <button type="button" onClick={onClose} className="btn btn-secondary">
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                            {initialData ? 'Update Product' : 'Add Product'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
