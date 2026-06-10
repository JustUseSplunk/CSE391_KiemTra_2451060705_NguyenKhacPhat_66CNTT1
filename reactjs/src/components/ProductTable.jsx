import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
    return (
        <div className="card shadow-sm border-0">
            <div className="card-body">
                <h5 className="card-title fw-bold">Danh sách sản phẩm</h5>
                <p className="text-muted small mb-4">Danh sách sản phẩm mẫu được hiển thị từ dữ liệu hệ thống.</p>
                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                            <tr className="text-muted text-uppercase small">
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th>Danh mục</th>
                                <th>Giá</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((prod, index) => (
                                <ProductRow key={prod.id} product={prod} index={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductTable;