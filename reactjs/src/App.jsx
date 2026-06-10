import React, { useState } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import { initialProducts } from './data/data';
import './styles/app.css';

function App() {

    const [products, setProducts] = useState(initialProducts);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div className="container mt-4">
            <Header />
            <div className="row">
                <div className="col-md-4">
                    {/* Truyền hàm xuống cho Form để gọi khi bấm submit */}
                    <ProductForm onAddProduct={handleAddProduct} />
                </div>
                <div className="col-md-8">
                    {/* Truyền mảng dữ liệu xuống cho Bảng để hiển thị */}
                    <ProductTable products={products} />
                </div>
            </div>
        </div>
    );
}

export default App;