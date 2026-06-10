document.addEventListener("DOMContentLoaded", function () {
    
    const productForm = document.getElementById("productForm");
    const tableBody = document.getElementById("productTableBody");

    function formatCurrency(amount) {
        return Number(amount).toLocaleString('vi-VN') + ' ₫';
    }

    productForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        const name = document.getElementById("productName").value.trim();
        const category = document.getElementById("productCategory").value;
        const price = document.getElementById("productPrice").value.trim();
        const statusVal = document.getElementById("productStatus").value;

        const nextSTT = tableBody.children.length + 1;

        let statusClass = statusVal === "true" ? "status-badge status-in-stock" : "status-badge status-out-of-stock";
        let statusText = statusVal === "true" ? "Còn hàng" : "Hết hàng";

        const newRowHTML = `
            <tr>
                <td>${nextSTT}</td>
                <td class="fw-semibold">${name}</td>
                <td>${category}</td>
                <td>${formatCurrency(price)}</td>
                <td><span class="${statusClass}">${statusText}</span></td>
            </tr>
        `;

        tableBody.insertAdjacentHTML('beforeend', newRowHTML);

        productForm.reset();
    });
});