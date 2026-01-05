import React, { useState, useEffect } from 'react';
import { Search, Grid, List, Plus } from 'lucide-react';
import logo from '../assets/logo.png';

export const Header = ({ onSearch, onViewChange, viewMode, onAddClick }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Debounce logic
    useEffect(() => {
        const handler = setTimeout(() => {
            onSearch(searchTerm);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm, onSearch]);

    return (
        <header className="header-container fade-in">
            <div className="logo-section">
                <img src={logo} alt="InventoryPro Logo" className="app-logo" />
                <h1 className="app-title">Inventory<span className="text-indigo-400">Pro</span></h1>
            </div>

            <div className="actions-section">
                <div className="search-bar">
                    <Search size={18} className="search-icon" />
                    <input
                        type="text"
                        className="input search-input"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="controls-group">
                    <div className="view-toggle">
                        <button
                            onClick={() => onViewChange('grid')}
                            className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                            aria-label="Grid View"
                            title="Grid View"
                        >
                            <Grid size={18} />
                        </button>
                        <button
                            onClick={() => onViewChange('list')}
                            className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                            aria-label="List View"
                            title="List View"
                        >
                            <List size={18} />
                        </button>
                    </div>

                    <button onClick={onAddClick} className="btn btn-primary add-btn">
                        <Plus size={18} /> <span className="hidden sm:inline">Add Product</span>
                    </button>
                </div>
            </div>
        </header>
    );
};
