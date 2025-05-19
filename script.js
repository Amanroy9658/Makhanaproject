// =========================
// 💳 CHECKOUT SYSTEM
// =========================
function openCheckout() {
  document.getElementById("checkout-form").style.display = "block";
  document.getElementById("cart-modal").style.display = "none";
}

function closeCheckout() {
  document.getElementById("checkout-form").style.display = "none";
}

function submitOrder(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();

  if (!name || !phone || !address) {
    alert("Please fill in all fields.");
    return;
  }

  const cart = getCart();
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const order = {
    name,
    phone,
    address,
    cart,
    total,
    timestamp: new Date().toISOString()
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  // Clear cart
  localStorage.removeItem("cart");
  updateCartDisplay();
  if (document.getElementById("cart-items")) renderCart();

  // Reset UI
  document.getElementById("checkout-form").style.display = "none";
  document.getElementById("order-confirmation").style.display = "block";

  // Clear form fields
  document.getElementById("customerName").value = "";
  document.getElementById("customerPhone").value = "";
  document.getElementById("customerAddress").value = "";
}

function returnHome() {
  document.getElementById("order-confirmation").style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}
