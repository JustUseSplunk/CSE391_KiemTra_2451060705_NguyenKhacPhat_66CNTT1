import React, { useState } from 'react';

function ProductForm({ onAddProduct }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('true');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newProduct = {
            id: Date.now(), 
            name: name.trim(),
            category: category,
            price: Number(price),
            status: status === 'true'
        };

        onAddProduct(newProduct); 

        setName('');
        setCategory('');
        setPrice('');
        setStatus('true');
    };

    return (
        <div className="card shadow-sm border-0">
            <div className="card-body">
                <h5 className="card-title fw-bold">Thêm sản phẩm mới</h5>
                <p className="text-muted small mb-4">Nhập đầy đủ thông tin để thêm sản phẩm vào danh sách.</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Tên sản phẩm</label>
                        <input type="text" className="form-control" placeholder="Nhập tên sản phẩm" required
                               value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Danh mục</label>
                        <select className="form-select" required
                                value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">-- Chọn danh mục --</option>
                            <option value="Điện thoại">Điện thoại</option>
                            <option value="Máy tính bảng">Máy tính bảng</option>
                            <option value="Phụ kiện">Phụ kiện</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Tai nghe">Tai nghe</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Giá</label>
                        <input type="number" className="form-control" placeholder="Nhập giá" required min="1"
                               value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label fw-semibold">Trạng thái còn hàng</label>
                        <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="true">Còn hàng</option>
                            <option value="false">Hết hàng</option>
                        </select>
                    </div>
                    <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-primary w-100">Thêm sản phẩm</button>
                        <button type="button" className="btn btn-outline-secondary text-nowrap" 
                                onClick={() => { setName(''); setCategory(''); setPrice(''); setStatus('true'); }}>
                            Làm mới form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;