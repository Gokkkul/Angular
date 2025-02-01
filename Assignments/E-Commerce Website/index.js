// document.addEventListener('DOMContentLoaded', function() {
//     const products = document.querySelectorAll('.product');
//     const cart = document.getElementById('cart');

//     products.forEach(product => {
//         const addToCartButton = product.querySelector('.add-to-cart');
//         addToCartButton.addEventListener('click', function() {
//             const productId = product.getAttribute('data-id');
//             const productName = product.getAttribute('data-name');
//             const productPrice = product.getAttribute('data-price');

//             addToCart(productId, productName, productPrice);
//         });
//     });

//     function addToCart(id, name, price) {
//         const cartItem = document.createElement('li');
//         cartItem.textContent = `${name} - $${price}`;
//         cart.appendChild(cartItem);
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const products = document.querySelectorAll(".product");
//   const cart = document.getElementById("cart");

//   products.forEach((product) => {
//     const addToCartButton = product.querySelector(".add-to-cart");
//     addToCartButton.addEventListener("click", function () {
//       const productId = product.getAttribute("data-id");
//       const productName = product.getAttribute("data-name");
//       const productPrice = product.getAttribute("data-price");
//       alert("Product Added to the cart...!");
//       console.log(productId);
//       console.log(productName);
//       console.log(productPrice);
//       addToCart(productId, productName, productPrice);
//     });
//     function addToCart(id, name, price) {
//       const cartItem = document.createElement("li");
//       cartItem.textContent = `${name} - $${price}`;
//       cart.appendChild(cartItem);
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const cart = document.getElementById("cart");

  products.forEach((product) => {
    const addToCartButton = product.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", function () {
      const productId = product.getAttribute("data-id");
      const productName = product.getAttribute("data-name");
      const productPrice = product.getAttribute("data-price");
      alert("Product Added to the cart...!");
      addToCart(productId, productName, productPrice);
    });
  });

  function addToCart(id, name, price) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const newItem = { id, name, price };
    cartItems.push(newItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
  }

  function removeFromCart(id) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
  }

  function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cart.innerHTML = '';
    let totalPrice = 0;
    cartItems.forEach(item => {
      const cartItem = document.createElement("li");
      cartItem.textContent = `${item.name} - ${item.price}`;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function () {
        removeFromCart(item.id);
      });
      cartItem.appendChild(removeButton);
      cart.appendChild(cartItem);
      totalPrice = parseFloat(totalPrice + parseFloat(item.price));
      if (!(cartItem)) {
        totalPrice = 0.00
      }
      document.getElementById('total-price').innerHTML = totalPrice;
      console.log("totalPrice:",totalPrice)
      
    });
  }

  updateCart();
});


document.addEventListener('DOMContentLoaded', function () {
  const categoryFilters = document.querySelectorAll('.category-filter');
  const priceFilters = document.querySelectorAll('.price-filter');

  categoryFilters.forEach(filter => {
      filter.addEventListener('change', filterProducts);
  });

  priceFilters.forEach(filter => {
      filter.addEventListener('change', filterProducts);
  });

  function filterProducts() {
      const selectedCategories = Array.from(categoryFilters)
          .filter(filter => filter.checked)
          .map(filter => filter.value);

      const selectedPriceRange = Array.from(priceFilters)
          .filter(filter => filter.checked)
          .map(filter => filter.value)[0];

      const products = document.querySelectorAll('.product-container .card');

      products.forEach(product => {
          const category = product.querySelector('.product').dataset.name;
          const price = parseInt(product.querySelector('.product').dataset.price);

          let categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(category);
          let priceMatch = true;

          if (selectedPriceRange) {
              const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
              priceMatch = price >= minPrice && price <= maxPrice;
          }

          if (categoryMatch && priceMatch) {
              product.style.display = 'block';
          } else {
              product.style.display = 'none';
          }
      });
  }
});

