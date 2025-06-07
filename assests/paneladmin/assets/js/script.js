let products = [
    { name: "تی شرت", price: 250000 },
    { name: " شلوار", price: 180000 }
];

function add() {
    let name = document.getElementById("productName").value.trim();
    let price = document.getElementById("productPrice").value;

    if (!name) {
        alert("نام محصول را وارد کنید!");
        return;
    }

    if (!price || isNaN(price) || Number(price) <= 0) {
        alert("قیمت معتبر وارد کنید! (باید عددی مثبت باشد)");
        return;
    }

    products.push({ name, price: Number(price) });

    printArray();
    
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
}

function show(filteredProducts) {
    let tableBody = document.getElementById("productTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; 

    filteredProducts.forEach((product, index) => {
        let realIndex = products.findIndex(p => p.name === product.name && p.price === product.price); 

        let row = document.createElement("tr");

        let rowNumber = document.createElement("td");
        rowNumber.textContent = index + 1;
        rowNumber.setAttribute("scope","row");

        let nameCell = document.createElement("td");
        nameCell.textContent = product.name;

        let priceCell = document.createElement("td");
        priceCell.textContent = `${product.price} تومان`;

        let operationCell = document.createElement("td");

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "حذف";
        deleteButton.onclick = function () { deleteProduct(realIndex); };
        deleteButton.setAttribute("class","btn btn-outline-danger mx-1");

        let editButton = document.createElement("button");
        editButton.textContent = "ویرایش";
        editButton.onclick = function () { editProduct(realIndex); };
        editButton.setAttribute("class","btn btn-primary mx-1");

        operationCell.appendChild(deleteButton);
        operationCell.appendChild(editButton);

        row.appendChild(rowNumber);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(operationCell);

        tableBody.appendChild(row);
    });
}

function printArray() {
    show(products);
}

function deleteProduct(index) {
    let confirmDelete = confirm(`آیا می‌خواهید محصول "${products[index].name}" را حذف کنید؟`);
    if (confirmDelete) {
        products.splice(index, 1);
        printArray();
    }
}

function editProduct(index) {
    let newName = prompt("نام جدید محصول را وارد کنید:", products[index].name);
    let newPrice = prompt("قیمت جدید محصول را وارد کنید:", products[index].price);

    if (newName && newPrice && !isNaN(newPrice) && Number(newPrice) > 0) {
        products[index].name = newName;
        products[index].price = Number(newPrice);
        printArray();
    } else {
        alert("اطلاعات وارد شده معتبر نیست!");
    }
}

function searchProduct() {
    let searchText = document.getElementById("searchInput").value.toLowerCase();

    let filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchText)
    );

    show(filteredProducts);
}

