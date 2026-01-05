import React from 'react';
import { Edit2, Trash2, Package } from 'lucide-react';

export const ProductList = ({ products, viewMode, onEdit, onDelete }) => {
    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
                <Package size={48} className="mb-4 text-slate-600" />
                <p className="text-xl font-medium text-slate-400">No products found</p>
                <p className="text-sm text-slate-600">Try adjusting your search or add a new product.</p>
            </div>
        );
    }

    if (viewMode === 'grid') {
        return (
            <div className="grid-view fade-in">
                {products.map((product) => (
                    <div key={product.id} className="card flex flex-col justify-between h-full">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <span className="badge">{product.category}</span>
                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${product.stock > 0 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold mb-1 text-slate-100">{product.name}</h3>
                            <p className="text-2xl font-bold text-indigo-400 mb-2">₹{product.price.toLocaleString('en-IN')}</p>
                            {product.description && <p className="text-sm text-slate-400 mb-4 line-clamp-2">{product.description}</p>}
                        </div>
                        <div className="flex gap-2 mt-4 pt-4 border-t border-slate-700">
                            <button
                                onClick={() => onEdit(product)}
                                className="btn btn-secondary flex-1"
                                aria-label={`Edit ${product.name}`}
                            >
                                <Edit2 size={16} /> Edit
                            </button>
                            {/* Optional: Delete button, didn't explicitly ask for delete but good for testing */}
                            {/* <button onClick={() => onDelete(product.id)} className="btn btn-danger btn-icon">
                <Trash2 size={16} />
              </button> */}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="table-container fade-in">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <div>
                                    <div className="font-medium text-slate-200">{product.name}</div>
                                    {product.description && <div className="text-xs text-slate-500 max-w-xs truncate">{product.description}</div>}
                                </div>
                            </td>
                            <td><span className="badge">{product.category}</span></td>
                            <td className="font-mono text-indigo-400">₹{product.price.toLocaleString('en-IN')}</td>
                            <td>
                                <span className={`${product.stock > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                                    {product.stock}
                                </span>
                            </td>
                            <td>
                                <button onClick={() => onEdit(product)} className="btn btn-secondary btn-sm" aria-label={`Edit ${product.name}`}>
                                    <Edit2 size={14} className="mr-1" /> Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
