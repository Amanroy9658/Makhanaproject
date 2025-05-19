let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCartDisplay();
}

function updateCartDisplay() {
  
  document.getElementById('cart-count').innerText = cart.length;

  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>
    `;
    cartItems.appendChild(li);
    total += item.price;
  });
  function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCartDisplay();
}



  document.getElementById('cart-total').innerText = total;
}

function toggleCart() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

 