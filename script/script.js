
//Dark/Light Mode

const mode = document.getElementById('mode');
const body = document.querySelector('body');

const modeFunc = () => {
  mode.addEventListener('click', () =>{
 
    if (mode.classList.contains('bx-sun')){
      mode.classList.toggle('bx-moon');
      body.classList.toggle('dark')
    }
  })
}

modeFunc();




//SIDE MENU

const menu = document.getElementById('menu');
const sideMenu = document.querySelector('.nav__mobile');

const menuSide = () => {
  menu.addEventListener('click', () =>{

    if (menu.classList.contains('bx-menu')){
      menu.classList.toggle('bx-x');
      sideMenu.classList.toggle('active');
    }
  })
}

menuSide();



/*Dene kode lager detail side for hvert produkt*/

document.addEventListener("DOMContentLoaded", function(){

  let products = document.querySelectorAll('.product');
  products.forEach(product => {
      product.addEventListener("click", function() {
          let proContainer = this;
          console.log(proContainer);
          let proImg = proContainer.querySelector('.product_img').src;
          console.log(proImg);
          let proBrand = proContainer.querySelector('.brand').textContent;
          console.log(proBrand);
          let proName = proContainer.querySelector('.cloth_name').textContent;
          console.log(proName);
          let proPrice = proContainer.querySelector('.cloth_price').textContent;
          console.log(proPrice);

          sessionStorage.setItem("productData", JSON.stringify({
              image: proImg, brand: proBrand, name: proName, price: proPrice
          }))
          
          window.location.href = `/sider/singelProduct.html`;
      })

  })



  console.log(sessionStorage.getItem("productData"));

  addToPage();

})

document.addEventListener("DOMContentLoaded", function(){
  let productData = JSON.parse(sessionStorage.getItem("productData"));
  console.log(productData );

  addToPage(productData.image, productData.brand, productData.name, productData.price);

  function addToPage(img, brand, name, price) {
      const singleProductDetails = document.getElementById('singleProduct-details'); // Get the product container

      singleProductDetails.innerHTML = `
      <div class="s-product-img">
      <img src="${img}"  alt="cloth" class="cart_img">
  </div>
  <div class="s-product-details">
      <span class="cart_brand">${brand}</span>
      <h4 class="cart_name">${name}</h4>
      <h2><span class="cart_price">${price}</span> kr</h2>
      <select class="Size">
          <option>Select Size</option>
          <option>XXL</option>
          <option>XL</option>
          <option>L</option>
          <option>M</option>
          <option>S</option>
      </select>
      <select class="Antall">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
      </select>
      <button class="addToCart">Add to cart</button>

      <h5>Product Details</h5>
      <p>Utforsk vår kolleksjon av skjorter, designet for både stil og komfort. Laget med førsteklasses materialer og nøye håndverk, hver skjorte er et uttrykk for tidløs eleganse. Velg mellom et utvalg av farger og mønstre, perfekt for enhver anledning. Med detaljer som gir både funksjonalitet og stil, vil våre skjorter være en pålitelig følgesvenn i din daglige garderobe. Opplev den perfekte balansen mellom stil og bekvemmelighet med våre skjorter, og la din personlige stil skinne gjennom.
      </p>
  </div> 
      `;


  }

})




/*cART sEC*/

document.addEventListener("DOMContentLoaded", function() {
    let addToCartButtons = document.querySelectorAll('.addToCart');
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            getCartData(button);
            cartCount++;
            localStorage.setItem("countCart", JSON.stringify(cartCount));
            updateCartIconCount();
        });
    });
    loadCartProducts();
    updateCartIconCount();
});

function getCartData(button) {
    let cartProContainer = button.parentElement.parentElement;
    let proImg = cartProContainer.querySelector('.cart_img').src;
    let proBrand = cartProContainer.querySelector('.cart_brand').textContent;
    let proName = cartProContainer.querySelector('.cart_name').textContent;
    let proPrice = cartProContainer.querySelector('.cart_price').textContent;
    let proSize = cartProContainer.querySelector('.Size').value;
    let proQuantity = cartProContainer.querySelector('.Antall').value;

    let cartProductData = {
        image: proImg,
        brand: proBrand,
        name: proName,
        price: proPrice,
        size: proSize,
        quantity: proQuantity
    };

    cartProducts.push(cartProductData);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

    console.log("Product added to cart", cartProductData);
    console.log("Current cart products", cartProducts);
}

let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
// let total = JSON.parse(localStorage.getItem("totalPrice"))||0;
// console.log('price' + total)
// let transportFee = JSON.parse(localStorage.getItem("transportFee")) || 0;
// console.log('fee' + transportFee)
// let totalWithTranport = JSON.parse(localStorage.getItem("totalWithTranport")) || 0;
// console.log('transport' + totalWithTranport)
let cartCount = JSON.parse(localStorage.getItem("countCart")) || 0;

function loadCartProducts() {
    cartProducts.forEach((product, i) => {
        addToCart(product.image, product.brand, product.name, product.price, product.size, product.quantity, i);

    });
}

function addToCart(img, brand, name, price, size, quantity, index) {
    const productDetails = document.querySelector('.product_details');

    let div = document.createElement('div');
    div.classList.add('product_info');
    div.innerHTML = `
        <div class="product">
            <div class="img">
                <img src="${img}" alt="">
            </div>   
            <div class="info" id="info">
                <h3>${brand}</h3>
                <p>${name}</p>
                <select class="Size">
                    <option value ="${size}">${size}</option>
                    <option value ="Select Size">Select Size</option>
                    <option value ="XXL">XXL</option>
                    <option value ="XL">XL</option>
                    <option value ="L">L</option>
                    <option value ="M">M</option>
                    <option value ="S">S</option>
                </select>
                <select class="Antall">
                    <option value ="${quantity}">${quantity}</option>
                    <option value ="1">1</option>
                    <option value ="2">2</option>
                    <option value ="3">3</option>
                    <option value ="4">4</option>
                    <option value ="5">5</option>
                    <option value ="6">6</option>
                    <option value ="7">7</option>
                    <option value ="8">8</option>
                    <option value ="9">9</option>
                    <option value ="10">10</option>
                </select>
            
                <div class="total_delete" id="total">
                    <h4>${price} kr</h4>
                    <img src="/assests/img/features/delete.png" alt="" class="delete-btn">
                </div>
            </div>
        </div>
    `;

    productDetails.appendChild(div);

    const deleteBtn = div.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        div.remove();
        cartProducts.splice(index, 1);
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

        if (cartCount > 0) {
            cartCount--;
            localStorage.setItem("countCart", JSON.stringify(cartCount));
            updateCartIconCount();
        }
    });
}

function updateCartIconCount() {
    let cartIconCount = document.querySelector('.cartCount');
    if (cartIconCount) {
        cartIconCount.textContent = cartCount;
    }
}








// cartProducts.forEach((product, i) => {
//     totalPrice(product.price);
// });

// function totalPrice (price) {
//     updatePrice(price);
//     updateTransportFee();
//     updateTotalWithTranport();

// }

// function updatePrice (price) {
//     let priceInt = parseInt(price);
//     console.log('ter' + typeof(priceInt));
//     total = total + priceInt;
//     localStorage.setItem("totalPrice", JSON.stringify(total));

//     document.getElementById('total_sum').textContent = total;

//     updateTransportFee();
// }

// function updateTransportFee() {
//     transportFee = total * 0.15;
//     localStorage.setItem("transportFee", JSON.stringify(transportFee));

//     document.getElementById('frakt_sum').textContent = transportFee;

//     updateTotalWithTranport();
// }

// function updateTotalWithTranport() {
//     let totalWithTranport = total + transportFee;

//     localStorage.setItem("totalWithTranport", JSON.stringify(totalWithTranport));

//     document.getElementById('total_sum_med_frakt').textContent = totalWithTranport;
// }



















