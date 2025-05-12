// Shopping cart

const cartData = {};

function toggleCart(show) {
    document.getElementById('shop').classList.toggle('d-none', show);
    document.getElementById('cart').classList.toggle('d-none', !show);
    if (show) updateCart();
}

function addToCart(productId) {
    const product = data.products.find(p => p.id === productId);
    if(cartData[product.id]){
        cartData[product.id].quantity++;
    } else {
        cartData[product.id] = {...product, quantity: 1 };
    }
    toggleCart(true);
    updateCart()
}

function updateCart() {
    const container = document.getElementById('cartItems');
    container.innerHTML = '';
    let total = 0;
    for(const id in cartData) {
        const item = cartData[id];
        const lineTotal = item.price * item.quantity;
        total += lineTotal;
        container.innerHTML += `
            <div class="row align-items-center border-bottom py-2">
                <div class="col-3">
                    <img src="${item.thumbnail}" class="img-fluid" style="max-height: 80px;">
                </div>
                <div class="col-3">${item.title}</div>
                <div class="col-3">
                    <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${item.id}, -1)">-</button>
                    <input type="number" min="1" value="${item.quantity}" onchange="setQty(${item.id}, this.value)" class="mx-1" style="width: 50px;">
                    <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${item.id}, 1)">+</button>
                </div>
                <div class="col-2">
                    ${(item.price * item.quantity).toFixed(2)} Eur
                </div>
                <div class="col-1">
                    <button class="btn btn-sm btn-danger" onclick="removeItem(${item.id})">
                    <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }
    const shipping = parseFloat(document.getElementById('shipping').value);
    let discount = 0;
    if (document.getElementById('discountCode').value.trim() === 'VCS10') {
        discount = 0.1 * total;
    }
    document.getElementById('totalPrice').textContent = (total - discount + shipping).toFixed(2);
}

function changeQty(id, diff) {
    if(cartData[id]){
        cartData[id].quantity = Math.max(1, cartData[id].quantity + diff);
        updateCart();
    }
}

function setQty(id, value) {
    const val = Math.max(1, parseInt(value));
    cartData[id].quantity = val;
    updateCart();
}

function removeItem(id) {
    delete cartData[id];
    updateCart();
}

document.getElementById('shipping').addEventListener('change', updateCart);
document.getElementById('discountCode').addEventListener('input', updateCart);

// Product list
function renderProducts() {

    const productList = data.products.map(row => {
            const nuolaida = row.price / 100 * row.discountPercentage;
            const galutineKaina = row.price - nuolaida;
    
            return `<div class="row border-top py-4">
                <div class="col-3">
                    <div class="image position-relative">
                        <img 
                            src="${row.thumbnail}" 
                            alt="Nuotrauka"
                            style="width: 200px; height: 150px; object-fit: cover;"
                        >
                        <span class="discount">-${row.discountPercentage}%</span>
                    </div>
                </div>
                <div class="col-6">
                    <h3 class="product-title">${row.title}</h3>
                    <div class="rating mb-3">
                        <div class="stars-active" style="width: ${row.rating * 2 * 10}%;">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <div class="stars">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                    </div>
                    <div class="description">
                        ${row.description}
                    </div>
                </div>
                <div class="col-3">
                    <div class="price mb-4">
                        <span class="current">$${galutineKaina.toFixed(2)}</span>
                        <span class="old">$${row.price}</span>
                    </div>
                    <div class="button">
                        <button class="btn btn-warning d-block w-100" onclick="addToCart(${row.id})" >Add to cart</button>
                    </div>
                </div>
            </div>
        `
    });
    
    document.querySelector('.result').innerHTML = productList.join('');
    
    }
    
    renderProducts();

    // Form
    document.getElementById('productForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const title = document.getElementById('title').value.trim();
        const description = document.getElementById('description').value.trim();
        const thumbnail = document.getElementById('thumbnail').value.trim();
        const rating = parseFloat(document.getElementById('rating').value);
        const price = parseFloat(document.getElementById('price').value);
        const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);
    
        // Naujo produkto sukurimas
        const newProduct = {
                title,
                description,
                thumbnail,
                rating,
                price,
                discountPercentage,
                id: data.products.length + 1,
                stock: 10,
                brand: "Naujas prekės ženklas",
                category: "beauty"
            };
    
            // Įdedame į masyvą
            data.products.push(newProduct);
    
            // Atvaizduoti produktus iš naujo
            renderProducts();
            
            // Išvalyti formą
            document.getElementById('productForm').reset();
    
    });
