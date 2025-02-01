// interface product {
//   id: number;
//   title: string;
//   price: number;
//   productDesc: string;
//   imgLink: string;
// }

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        // Get input values
        const id = (document.getElementById('title') as HTMLInputElement).value;
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const price = (document.getElementById('price') as HTMLInputElement).value;
        const productDescription = (document.getElementById('productDescription') as HTMLTextAreaElement).value;
        const imgLink = (document.getElementById('imgLink') as HTMLInputElement).value;

        // Create a product object
        const product = {
            id,
            title,
            price,
            productDescription,
            imgLink
        };

        // Store the product in localStorage
        const products = JSON.parse(sessionStorage.getItem('products') || '[]');
        products.push(product);
        console.log(products);
        
        sessionStorage.setItem('products', JSON.stringify(products));

        // Clear the form
        form.reset();
        alert('Product added successfully');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');

    function displayProducts() {
        const products = JSON.parse(sessionStorage.getItem('products') || '[]');
        
        productList.innerHTML = '';

        products.forEach((product, index) => {
            const productCard = `
                <div class="card">
                    <img class="product-img" src="${product.imgLink}" alt="${product.title}" style="width:100%">
                    <div class="container product" data-id="${product.id}">
                        <h4 class="product-title"><b>${product.title}</b></h4>
                        <p class="product-price"><b>Price - ${product.price}/-</b> </p>
                        <div class="btn-container">
                            <button class="btn add-to-cart">Add to cart</button>
                        </div>
                        <p class="product-desc">${product.productDescription}</p>
                    </div>
                </div>`;
            productList.innerHTML += productCard;
        });
    }

    displayProducts();
});


