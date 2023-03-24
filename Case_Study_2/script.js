// thêm sản phẩm nhập
class product {
  constructor(name, category, inquantity, inprice, outquantity, outprice, outbill, penquantity) {
    this.name = name;
    this.category = category;
    this.inquantity = inquantity;
    this.inprice = inprice;
    this.outquantity = outquantity;
    this.outprice = outprice;    
    this.outbill = outbill;
    this.penquantity = penquantity;
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
  let inquantityCell = row.insertCell(2);
  let inpriceCell = row.insertCell(3);
  let outquantityCell = row.insertCell(4);
  let outpriceCell = row.insertCell(5);
  let outbillCell = row.insertCell(6);
  let penquantityCell = row.insertCell(7);
  
  nameCell.innerHTML = product.name;
  categoryCell.innerHTML = product.category;
  inpriceCell.innerHTML = product.inprice;
  inquantityCell.innerHTML = product.inquantity;
  outquantityCell.innerHTML = product.outquantity;
  outpriceCell.innerHTML = product.outprice;
  outbillCell.innerHTML = product.outbill;
  penquantityCell.innerHTML = product.penquantity;
};

btnAdd.addEventListener("click", () => {
  let productName = document.getElementById("product-name").value;
  let productCategory = document.getElementById("product-category").value;
  let productInQuantity = parseInt(document.getElementById("product-inquantity").value);
  let productinPrice = parseInt(document.getElementById("product-inprice").value);
  let productOutQuantity = parseInt(document.getElementById("product-outquantity").value);
  let productOutPrice = parseInt(document.getElementById("product-outprice").value);
  let productOutBill = parseInt(document.getElementById("product-outbill").value);
  let productPenQuantity = productInQuantity - productOutQuantity;


  let newproduct = new product(
    productName,
    productCategory,
    productInQuantity,
    productinPrice,
    productOutQuantity,
    productOutPrice,
    productOutBill,
    productPenQuantity,
    
  );

  productList.push(newproduct);
  // console.log(productList);

  alert(`sản phẩm "${newproduct}" đã được thêm`);
  addProductToTable(newproduct);
});
//tìm kiếm sản phẩm
function searchproduct() {
  let searchName = document.getElementById("search-name").value;
  //loop through each item in productList
  for (let i in productList) {
    if (productList[i].name.includes(searchName)) {
      document.getElementById("product-name").value = productList[i].name;
      document.getElementById("product-category").value = productList[i].category;
      document.getElementById("product-inquantity").value = productList[i].inquantity;
      document.getElementById("product-inprice").value = productList[i].inprice;
      document.getElementById("product-outquantity").value = productList[i].outquantity;
      document.getElementById("product-outprice").value = productList[i].outprice;
      document.getElementById("product-outbill").value = productList[i].outbill;

      console.log(productList[i]);
      alert(`sản phẩm "${searchName}" : "${productList[i]} `)
      break;
    }
  }
}
