const products = [
 {id:1, name:"Laptop", price:50000, image:"https://via.placeholder.com/150"},
 {id:2, name:"Phone", price:20000, image:"https://via.placeholder.com/150"}
];

// LOAD PRODUCTS
if(document.getElementById('products')){
 products.forEach(p=>{
  productsDiv.innerHTML += `
   <div class="card">
    <img src="${p.image}">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <a href="product.html?id=${p.id}">View</a>
   </div>`
 })
}

// PRODUCT DETAILS
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
if(id){
 const p = products.find(x=>x.id==id);
 name.innerText = p.name;
 price.innerText = "₹"+p.price;
 image.src = p.image;
 localStorage.setItem('current', JSON.stringify(p));
}

// CART
function addToCart(){
 let cart = JSON.parse(localStorage.getItem('cart'))||[];
 cart.push(JSON.parse(localStorage.getItem('current')));
 localStorage.setItem('cart', JSON.stringify(cart));
 alert('Added to cart');
}

if(document.getElementById('cart')){
 let cart = JSON.parse(localStorage.getItem('cart'))||[];
 let sum = 0;
 cart.forEach(p=>{
  cartDiv.innerHTML += <p>${p.name} - ₹${p.price}</p>;
  sum += p.price;
 })
 total.innerText = "Total: ₹"+sum;
}

// REGISTER & LOGIN
function register(){
 localStorage.setItem(ruser.value, rpass.value);
 alert('Registered');
}
function login(){
 if(localStorage.getItem(luser.value)===lpass.value){
  alert('Login Success'); location.href='index.html';
 } else alert('Invalid');
}

// ORDER
function placeOrder(){
 localStorage.removeItem('cart');
 alert('Order Placed Successfully');
 location.href='index.html';
}