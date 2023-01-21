let products = [];
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
// Dropdown

var dropDownContent = document.getElementById("womenDD");
dropDownContent.style.display = "none";
function mouseOverToggle() {
    dropDownContent.style.display = "";
}
function mouseOutToggle() {
    dropDownContent.style.display = "none";
}

// showing api data
let api = "https://63c822925c0760f69ac60c18.mockapi.io/product";
getData();
async function getData() {
    let result = await fetch(api);
    let data = await result.json();
    products = data;
    // console.log(products);
    displayData(products);
}
//DISPLAYING THE PRODUCTS ON THE PAGE
let productContainer = document.getElementById("productsList");
function displayData(products) {
    // console.log(products);
    productContainer.innerHTML = null;
    products.forEach((el, index) => {
        let product = document.createElement("div");
        product.setAttribute("class", "productCard");
        let productImage = document.createElement("img");
        productImage.setAttribute("src", el.image);
        let productName = document.createElement("p");
        productName.setAttribute("class", "productName");
        productName.innerText = el.name;
        let productPrice = document.createElement("p");
        productPrice.setAttribute("class", "productPrice");
        productPrice.innerText = el.price;

        let addToCart = document.createElement("button");
        addToCart.setAttribute("class", "addToCartBtn");
        addToCart.innerText = "Add To Cart";
        addToCart.addEventListener("click", function () {
            let newData = products.filter(function (element, ind) {
                if (ind == index) {
                    alert("Product Added to Cart");
                    cartData.push(element);
                }
            });
            console.log(cartData);
            localStorage.setItem("cart", JSON.stringify(cartData));
        });
        product.append(productImage, productName, productPrice, addToCart);
        productContainer.append(product);
    });
}

//Sorting DATA ACCORDING TO THE PRICE
let filterBy = document.getElementById("filter");
filterBy.addEventListener("change", function (e) {
    let filterByValue = e.target.value;
    // console.log(filterByValue);
    if (filterByValue.toLowerCase() == "default") {
        location.reload();
        displayData(products);
    } else if (filterByValue.toLowerCase() == "low to high") {
        let sortedData = products.sort((a, b) => {
            return a.price.localeCompare(b.price);
        });
        displayData(sortedData);
    } else if (filterByValue.toLowerCase() == "high to low") {
        let sortedData = products.sort((b, a) => {
            return a.price.localeCompare(b.price);
        });
        displayData(sortedData);
    }
});

// console.log("a", data);
// running loop over data

// FILTERING --------------------
