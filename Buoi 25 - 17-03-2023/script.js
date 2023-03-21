// thêm sản phẩm
class product {
  constructor(name, category, price, quantity) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
}
let productList = [];
let btnAdd = document.getElementById("btn-add");

// Đưa sản phẩm thêm vào bảng
function addProductToTable(product) {
  let table = document.getElementById("producttable");

  let row = table.insertRow();
  let nameCell = row.insertCell(0);
  let categoryCell = row.insertCell(1);
  let priceCell = row.insertCell(2);
  let quantityInCell = row.insertCell(3);
  let quantityOutCell = row.insertCell(4);
  let quantityTotalCell = row.insertCell(5);
  
  nameCell.innerHTML = product.name;
  categoryCell.innerHTML = product.category;
  priceCell.innerHTML = product.price;
  quantityInCell.innerHTML = product.quantity;
  quantityOutCell.innerHTML = 0;
  quantityTotalCell.innerHTML = product.quantity;

};

btnAdd.addEventListener("click", () => {
  let productName = document.getElementById("product-name").value;
  let productCategory = document.getElementById("product-category").value;
  let productPrice = parseInt(document.getElementById("product-price").value);
  let productQuantity = parseInt(
    document.getElementById("product-quantity").value
  );

  let newproduct = new product(
    productName,
    productCategory,
    productPrice,
    productQuantity
  );

  productList.push(newproduct);
  console.log(productList);

  alert(`sản phẩm "${newproduct}" đã được thêm`);
  addProductToTable(newproduct);
});
// tìm kiếm sản phẩm
function searchproduct() {
  let searchName = document.getElementById("search-name").value;
  //loop through each item in productList
  for (let i in productList) {
    if (productList[i].name.includes(searchName)) {
      document.getElementById("product-name").value = productList[i].name;
      document.getElementById("product-category").value = productList[i].category;
      document.getElementById("product-price").value = productList[i].price;
      document.getElementById("product-quantity").value = productList[i].quantity;
      console.log(productList[i]);
      break;
    }
  }
}
