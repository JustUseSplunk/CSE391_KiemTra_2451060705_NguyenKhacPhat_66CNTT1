import React from 'react';

function ProductRow({ product, index }) {
    const formatCurrency = (amount) => Number(amount).toLocaleString('vi-VN') + ' ₫';
    const statusClass = product.status ? "status-badge status-in-stock" : "status-badge status-out-of-stock";
    const statusText = product.status ? "Còn hàng" : "Hết hàng";

    return (
        <tr>
            <td>{index + 1}</td>
            <td className="fw-semibold">{product.name}</td>
            <td>{product.category}</td>
            <td>{formatCurrency(product.price)}</td>
            <td><span className={statusClass}>{statusText}</span></td>
        </tr>
    );
}

export default ProductRow;