document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const grandTotalContainer = document.getElementById('grand-total');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCartDisplay = () => {
       cartItemsContainer.innerHTML = '';
       let grandTotal = 0;

       cart.forEach((item, index) => {
          const itemTotal = item.price * item.quantity;
          grandTotal += itemTotal;

          cartItemsContainer.innerHTML += `
             <tr>
                <td>${item.name}</td>
                <td>Rs${item.price.toFixed(2)}</td>
                <td>
                   <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input">
                </td>
                <td>Rs${itemTotal.toFixed(2)}</td>
                <td><button data-index="${index}" class="remove-item">Remove</button></td>
             </tr>
          `;
       });

       grandTotalContainer.innerText = `Grand Total: Rs ${grandTotal.toFixed(2)}`;
    };

    const saveCart = () => {
       localStorage.setItem('cart', JSON.stringify(cart));
    };

    cartItemsContainer.addEventListener('input', (e) => {
       if (e.target.classList.contains('quantity-input')) {
          const index = e.target.getAttribute('data-index');
          const newQuantity = parseInt(e.target.value);
          cart[index].quantity = newQuantity;
          saveCart();
          updateCartDisplay();
       }
    });

    cartItemsContainer.addEventListener('click', (e) => {
       if (e.target.classList.contains('remove-item')) {
          const index = e.target.getAttribute('data-index');
          cart.splice(index, 1);
          saveCart();
          updateCartDisplay();
       }
    });

    document.getElementById('checkout').addEventListener('click', () => {
       alert('Checkout functionality coming soon!');
    });

    updateCartDisplay();
 });


 let count = 0;
 const counter = document.getElementById('counter');
 document.querySelector('.add-to-cart my_button').addEventListener('click', event => {
     const cl = counter.classList;
     const c = 'animation-counter';
     count++;
     counter.innerHTML = count;
     cl.remove(c);
     setTimeout(() => counter.classList.add('animation-counter'), 1); 
 });
 