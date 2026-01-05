# InventoryPro - Product Catalog Dashboard

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![React](https://img.shields.io/badge/React-18.x-blue) ![Vite](https://img.shields.io/badge/Vite-5.x-purple)

A modern, responsive product inventory management application built with **React** and **Vite**. Features a premium dark-themed UI with grid/list views, real-time search, and intuitive product management.

## 🚀 Features

- **📊 View Modes**: Seamlessly toggle between **Grid (Card)** and **List (Table)** views.
- **🔍 Smart Search**: Real-time product filtering with debounced input for performance.
- **📝 Product Management**:
    - **Add Products**: Modal form with validation.
    - **Edit Products**: Update existing product details in place.
- **📄 Pagination**: Client-side pagination handling for manageable data display.
- **₹ Localization**: Full support for **INR (₹)** currency formatting.
- **🎨 Premium UI**:
    - Modern Dark Mode aesthetics.
    - Glassmorphism effects and smooth transitions.
    - Custom thin scrollbars and interactive hover states.
    - Fully responsive design for Mobile, Tablet, and Desktop.

## 🛠️ Tech Stack

- **Frontend**: [React.js](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🏁 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/arjunshettyz/Product-Catalog-Dashboard.git
    ```

2.  **Navigate to the project directory**:
    ```bash
    cd Product-Catalog-Dashboard
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📂 Project Structure

```
src/
├── assets/          # Static assets (Logos, images)
├── components/      # Reusable UI components
│   ├── Header.jsx       # App logic for search, toggle, and add actions
│   ├── ProductList.jsx  # Handles Grid and List rendering
│   ├── ProductForm.jsx  # Modal form for Add/Edit
│   └── Pagination.jsx   # Pagination controls
├── hooks/           # Custom hooks
│   └── useProducts.js   # State management for products (CRUD)
├── App.jsx          # Main application layout
├── index.css        # Global styles and design system
└── main.jsx         # Entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
